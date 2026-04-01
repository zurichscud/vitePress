# Method

## implments

AnnotatedElement

## extends

AccessibleObject

## Methods

### `invoke(Object obj, Object... args)`

- 作用：执行方法
- 注意：这个方法是 `Method` 类的方法

```java
Person person = new Person("Tom", 18);
Class<Person> clazz = Person.class;
Method method = clazz.getMethod("show");

method.invoke(person); // name=Tom, age=18
```

通过反射执行私有方法

```java
Person person = new Person("Tom", 18);
Class<Person> clazz = Person.class;
Method method = clazz.getDeclaredMethod("getInfo", String.class);

method.setAccessible(true);
Object result = method.invoke(person, "info:");

System.out.println(result); // info:Tom-18
```

