# sort



## Grammar

```ts
sort()
sort(compareFn)
```





## Params

- compareFn  <Badge text="可选"/>

  定义排序顺序的函数。返回值应该是一个数字，其符号表示两个元素的相对顺序：

  如果 `a` 小于 `b`，返回值为负数

  如果 `a` 大于 `b`，返回值为正数

  如果两个元素相等，返回值为 `0`。

如果省略该函数，数组元素会被转换为字符串，然后根据每个字符的 Unicode 码位值进行排序。

例如“banana”会被排列到“cherry”之前。在数值排序中，9 出现在 80 之前，但因为数字会被转换为字符串，在 Unicode 顺序中“80”排在“9”之前。所有的 `undefined` 元素都会被排序到数组的末尾。

## Return

经过排序的原始数组的引用。

## Example

```ts
const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
```

