# Invoke

[状态机 ](https://stately.ai/docs/machines)可以在某个状态中“调用”一个或多个 [actor](https://stately.ai/docs/actors)。当状态进入时，被调用的 actor 将开始运行，并在状态退出时停止。任何 XState actor 都可以被调用，包括简单的基于 Promise 的 actor，甚至是复杂的基于状态机的 actor。

```ts
import { setup, createActor, fromPromise, assign } from 'xstate';

const fetchUser = (userId: string) =>
  fetch(`https://example.com/${userId}`).then((response) => response.text());

const userMachine = setup({
  types: {
    context: {} as {
      userId: string;
      user: object | undefined;
      error: unknown;
    },
  },
  actors: {
    fetchUser: fromPromise(async ({ input }: { input: { userId: string } }) => {
      const user = await fetchUser(input.userId);

      return user;
    }),
  },
}).createMachine({
  id: 'user',
  initial: 'idle',
  context: {
    userId: '42',
    user: undefined,
    error: undefined,
  },
  states: {
    idle: {
      on: {
        FETCH: { target: 'loading' },
      },
    },
    loading: {
      invoke: {
        id: 'getUser',
        src: 'fetchUser',
        input: ({ context: { userId } }) => ({ userId }),
        onDone: {
          target: 'success',
          actions: assign({ user: ({ event }) => event.output }),
        },
        onError: {
          target: 'failure',
          actions: assign({ error: ({ event }) => event.error }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading' },
      },
    },
  },
});
```



## Invoked actor和Actions有什么不同

Actions 是“触发就不管了”

- **同步执行**

- **不会被 await**

- **不影响状态迁移**

- **不能直接参与错误处理**

```ts
actions: async () => {
  await fetch('/api'); // ❌ 这个 await 对状态机没意义
}
```



::: tip states transition synchronously

- 状态迁移是**原子、同步**的

- 不存在“迁移中”这种中间态

- 你永远可以假设： **发送事件 → 立刻进入新状态**

:::

```ts
invoke: {
  src: 'fetchUser',
  onError: {
    target: 'failure',
    actions: assign({ error: ({ event }) => event.error })
  }
}
```

### 

一个调用在状态节点的配置中通过 `invoke` 属性定义，其值是一个包含以下内容的对象：

### src

在创建 actor 时要调用的 [actor 逻辑 ](https://stately.ai/docs/actors#actor-logic)的来源，或指向机器中 [提供实现 ](https://stately.ai/docs/machines#providing-implementations)中定义的 actor 逻辑的字符串。

- Object

```ts
invoke: {
  src: someMachine,
}
```

- String

```ts
invoke: {
  src: 'fetchUser',
}

```

```s
createMachine(
  {},
  {
    actors: {
      fetchUser: fetchUserMachine,
    },
  }
);

```

```ts
invoke: {
  id: 'fetchUser',
  src: fetchUserMachine,
}

```





## 复用Invoked Actor

### Invoked Actor Object

- src：ActorLogic

  - Machine
  - fromPromise
  - String：actors中声明的引用名

  ```ts
  createMachine({}, {
    actors: {
      fetchUser: fetchUserMachine,
    },
  });
  
  ```

- id： 用于标识 actor 的字符串，在其父机器中是唯一的。

-  input：传递给Actor的输入

-  onDone：Actor完成时触发

- onError：Actor抛出错误时调用

- onSnapshot：快照发生变化时触发

- systemId：一个字符串，用于标识Actor，系统范围内唯一。

### `Array<Invoked Actor Object>`

```ts
const vitalsWorkflow = createMachine({
  states: {
    CheckVitals: {
      invoke: [
        { src: 'checkTirePressure' },
        { src: 'checkOilPressure' },
        { src: 'checkCoolantLevel' },
        { src: 'checkBattery' },
      ],
    },
  },
});
```



## Invoked Actor

### onDone

Actor完成时触发。Actor执行完成，会有一个output。可以通过`event.output`获取

```ts
      invoke: {
        src: 'fetchForm',
        onDone: [
          {
            target: 'step1',
            guard: ({ event }) => (event.output as FormDTO).step === 'step1',
            actions: 'restoreForm',
          },
          {
            target: 'step2',
            guard: ({ event }) => (event.output as FormDTO).step === 'step2',
            actions: 'restoreForm',
          },
          {
            target: 'review',
            guard: ({ event }) => (event.output as FormDTO).step === 'review',
            actions: 'restoreForm',
          },
          {
            target: 'step1',
            actions: 'restoreForm',
          },
        ],
        onError: {
          // 如果加载失败，从第一步开始
          target: 'step1',
        },
      },
```

