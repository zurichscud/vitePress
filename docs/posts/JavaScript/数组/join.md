# join

**`join()`** 方法将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#使用类数组对象)）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。

## Grammar

```ts
join()
join(separator)
```



## Params

- separator   <Badge text="可选"/>

  指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。
  
  如果省略，数组元素用逗号（`,`）分隔。
  
  如果 `separator` 是空字符串（`""`），则所有元素之间都没有任何字符。

## Return

一个所有数组元素连接的字符串。如果 `arr.length` 为 `0`，则返回空字符串。

## Example

```ts
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

