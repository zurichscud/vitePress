# splice

提取元素，替换元素。存在副作用

## 语法

```ts
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

- `splice(start)`：从 `start` 索引开始，删除到数组末尾。
- `splice(start, deleteCount)`：从 `start` 开始，删除 `deleteCount` 个元素
- `splice(start, deleteCount, item1)`：从 `start` 开始删除 `deleteCount` 个元素，并在`start`的位置插入一个新元素 `item1`
- `splice(start, deleteCount, item1, item2)`：删除 `deleteCount` 个元素，并在`start`位置插入多个新元素（此处为两个）。

## Params

- start  <Badge text="支持负数"/>

  要操作的起始索引

- deleteCount

  要删除的元素数量

- itemN

  要插入的新元素

## Return

被提取元素组成的**数组**

## Use

#### 1. 删除元素

```ts
const arr = [1, 2, 3, 4, 5]

// 从索引 1 开始删除 2 个元素
const removed = arr.splice(1, 2)

console.log(removed) // [2, 3]
console.log(arr)     // [1, 4, 5]
```

------

#### 2. 插入元素

```ts
const arr = [1, 4, 5]

// 从索引 1 开始，不删除元素，插入 2 和 3
arr.splice(1, 0, 2, 3)

console.log(arr) // [1, 2, 3, 4, 5]
```

------

#### 3. 替换元素

```ts
const arr = [1, 2, 3, 4]

// 从索引 1 开始删除 2 个元素，并插入 9、8
arr.splice(1, 2, 9, 8)

console.log(arr) // [1, 9, 8, 4]
```
