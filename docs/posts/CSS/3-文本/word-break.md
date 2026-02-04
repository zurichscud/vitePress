# word-break

`word-break` 是 **CSS 控制“单词如何断行”** 的属性，主要用来解决**长单词 / 连续字符把布局撑破**的问题，尤其在中英文混排、URL、长数字时很常见。

```css
word-break: normal | break-all | keep-all;
```



## normal

```css
word-break: normal;
```

- **英文**：只在**单词之间**换行，不会把一个单词拆开

- **中 / 日 / 韩**：可以在任意字符处换行

## break-all

```css
word-break: break-all;
```

- **任意字符都可以断行**

- 英文单词、数字、URL 都能被强行拆开

## keep-all

```css
word-break: keep-all;
```

- **中 / 日 / 韩：不允许随意断字**

- 只在空格或标点处换行

- 英文和中文都会尽量整体显示