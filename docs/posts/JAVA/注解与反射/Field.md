# Field

## implments

AnnotatedElement

## extends

AccessibleObject

## Methods

### `get(Object obj)`

- 作用：读取对象的属性值

```java
Person person = new Person("Tom", 18);
Class<Person> clazz = Person.class;
Field field = clazz.getDeclaredField("name");

field.setAccessible(true);
Object value = field.get(person);

System.out.println(value); // Tom
```

### `set(Object obj, Object value)`

- 作用：修改对象的属性值

```java
Person person = new Person("Tom", 18);
Class<Person> clazz = Person.class;
Field field = clazz.getDeclaredField("name");

field.setAccessible(true);
field.set(person, "Jerry");

person.show(); // name=Jerry, age=18
```



