# replace



## Grammar

```ts
replace(pattern, replacement)
```

- [`pattern`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#pattern)

  可以是字符串或者一个带有 [`Symbol.replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) 方法的对象，典型的例子就是[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)。任何没有 `Symbol.replace` 方法的值都会被强制转换为字符串。

- [`replacement`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#replacement)

  可以是字符串或函数。

该方法并不改变调用它的字符串本身，而是返回一个新的字符串。

字符串模式只会被替换一次。要执行全局搜索和替换，请使用带有 `g` 标志的正则表达式或使用 [`replaceAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)。

如果 `pattern` 是一个空字符串，则替换项将被插入到字符串的开头。

```ts
"xxx".replace("", "_"); // "_xxx"
```

## Callback

```ts
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

- [`match`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#match)

  匹配的子字符串。（对应于上面的 `$&`。）

- [`p1, p2, …, pN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#p1_p2_…_pn)

  如果 `replace()` 的第一个参数是 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 对象，则为捕获组（包括命名捕获组）找到的第 `n` 个字符串。（对应于上面的 `$1`、`$2` 等。）例如，如果 `pattern` 是 `/(\a+)(\b+)/`，则 `p1` 是 `\a+` 的匹配项，`p2` 是 `\b+` 的匹配项。如果该组是分支的一部分（例如 `"abc".replace(/(a)|(b)/, Replacer)`），则不匹配的替代项将为 `undefined`。

- [`offset`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#offset)

  原始字符串中匹配子字符串的偏移量。例如，如果整个字符串是 `'abcd'`，而匹配的子字符串是 `'bc'`，那么这个参数将是 `1`。

- [`string`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#string)

  正在检查的原始字符串。

- [`groups`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#groups)

  一个捕获组命名组成的对象，值是匹配的部分（如果没有匹配，则为 `undefined`）。仅在 `pattern` 包含至少一个命名捕获组时才存在。

## Return

一个新的字符串，其中一个、多个或所有的匹配项都被指定的替换项替换。

