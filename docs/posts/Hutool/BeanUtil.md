# BeanUtil

## beanToMap(Object bean, Map<String, Object> targetMap, CopyOptions copyOptions)

对象转Map

返回值：`Map<String, Object> `

通过自定义CopyOptions可以实现：

1. 字段筛选，可以去除不需要的字段
2. 字段变换，例如实现驼峰转下划线
3. 自定义字段前缀或后缀等等
4. 字段值处理

```java
BeanUtil.beanToMap(outerLawyer, new LinkedHashMap<>(),CopyOptions.create().setIgnoreNullValue(true))
```

```java
name = "张三"
phone = null
email = null
```

```json [转换后]
{
  "name": "张三"
}
```

## beanToMap(Object bean, Map<String, Object> targetMap, final boolean isToUnderlineCase, boolean ignoreNullValue)

对象转Map

返回值：`Map<String, Object> `

```java
	 * @param bean              bean对象
	 * @param targetMap         目标的Map
	 * @param isToUnderlineCase 是否转换为下划线模式
	 * @param ignoreNullValue   是否忽略值为空的字段
```

```java
BeanUtil.beanToMap(outerLawyer, new LinkedHashMap<>(), false, false)
```

