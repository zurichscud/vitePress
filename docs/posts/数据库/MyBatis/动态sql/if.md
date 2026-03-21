# if



## 基本语法

```xml
<if test="条件">
    SQL片段
</if>
```

-  条件成立 → 拼接 SQL
- 条件不成立 → 不拼接
- 使用`and`和`` 连接多个条件

```xml
<select id="queryUser" resultType="User">
    SELECT * FROM user
    WHERE 1=1

    <if test="name != null">
        AND name = #{name}
    </if>

    <if test="age != null">
        AND age = #{age}
    </if>
</select>
```



## test

