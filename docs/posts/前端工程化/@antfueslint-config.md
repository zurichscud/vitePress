# @antfu/eslint-config



```sh
pnpm i -D  @antfu/eslint-config
```

## antfu/if-newline

用于**在 `if` 语句后强制或禁止换行**。默认行为是要求在 `if` 语句后**添加一个空行**，以提高代码可读性

:::code-group

```ts [错误写法]
if (condition) {
  doSomething()
}
doAnotherThing()
```



```ts [正确写法]
if (condition) {
  doSomething()
}

doAnotherThing()
```



:::

## antfu/vue/rules

vue内建风格

| 规则                                  | 级别  | 注释                                               |
| ------------------------------------- | ----- | -------------------------------------------------- |
| vue/padding-line-between-blocks       | error | 要求块之间存在空行                                 |
| vue/define-macros-order               | error | 要求编译宏顺序（如 `defineProps` → `defineEmits`） |
| vue/custom-event-name-casing          | error | **组件自定义事件统一用camelCase命名**              |
| vue/v-on-event-hyphenation            | error | 控制 `v-on`中事件名的命名风格为kebab-case。        |
| vue/component-tags-order              |       | ["template", "script", "style"]                    |
| vue/component-options-name-casing     |       | **确保组件命名统一为 PascalCase**。                |
| vue/component-name-in-template-casing | error | 在模板里使用组件时命名风格为PascalCase             |
| vue/block-order                       | error | 块顺序：["script", "template", "style"]            |
| vue/attributes-order                  |       | 根据antfu指定的顺序排序                            |
| vue/html-self-closing                 |       | 强制自闭合组件和普通元素                           |
| vue/component-definition-name-casing  |       | 强制组件定义的 `name` 属性使用 PascalCase          |
