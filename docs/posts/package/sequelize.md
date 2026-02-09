# sequelize

## 安装sequelize



```ts
npm i sequelize mysql2
```



## 安装sequelize-cli



```ts
npm i -g sequelize-cli
```

使用cli进行初始化：

```ts
sequelize init
```

- config/config.js：数据库连接配置
- migrations：迁移文件
- models：模型
- seeders：种子



```sh
# 1. 创建模型（会自动生成 model 和 migration）
npx sequelize-cli model:generate --name User --attributes name:string,email:string

# 2. 修改生成的 migration 文件（添加索引、约束等）
# 编辑 migrations/xxxxx-create-user.js

# 3. 运行迁移（创建数据库表）
npx sequelize-cli db:migrate

# 4. 如果需要回滚
npx sequelize-cli db:migrate:undo

# 5. 查看迁移状态
npx sequelize-cli db:migrate:status
```

