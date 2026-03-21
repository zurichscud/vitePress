## mcp_server_mysql

## install

```sh
pnpm add -g @benborla29/mcp-server-mysql
```

- sh

```sh
codex mcp add mcp_server_mysql \
  --env MYSQL_HOST="127.0.0.1" \
  --env MYSQL_PORT="3306" \
  --env MYSQL_USER="root" \
  --env MYSQL_PASS="your_password" \
  --env MYSQL_DB="your_database" \
  --env ALLOW_INSERT_OPERATION="false" \
  --env ALLOW_UPDATE_OPERATION="false" \
  --env ALLOW_DELETE_OPERATION="false" \
  -- npx -y @benborla29/mcp-server-mysql
```

- json

```json
{
  "mcpServers": {
    "mcp_server_mysql": {
      "command": "/path/to/npx/binary/npx",
      "args": [
        "-y",
        "@benborla29/mcp-server-mysql"
      ],
      "env": {
        "MYSQL_HOST": "127.0.0.1",
        "MYSQL_PORT": "3306",
        "MYSQL_USER": "root",
        "MYSQL_PASS": "",
        "MYSQL_DB": "db_name",
        "ALLOW_INSERT_OPERATION": "false",
        "ALLOW_UPDATE_OPERATION": "false",
        "ALLOW_DELETE_OPERATION": "false"
      }
    }
  }
}
```



```sh
claude mcp get mcp_server_mysql
```



## 配置

### 基础连接

- `MYSQL_HOST`：MySQL 服务主机地址（默认：`"127.0.0.1"`）
- `MYSQL_PORT`：MySQL 服务端口（默认：`"3306"`）
- `MYSQL_USER`：MySQL 用户名（默认：`"root"`）
- `MYSQL_PASS`：MySQL 密码
- `MYSQL_DB`：目标数据库名（多数据库模式下留空）

### 安全配置

- `ALLOW_INSERT_OPERATION`：启用 `INSERT` 操作（默认：`"false"`）
- `ALLOW_UPDATE_OPERATION`：启用 `UPDATE` 操作（默认：`"false"`）
- `ALLOW_DELETE_OPERATION`：启用 `DELETE` 操作（默认：`"false"`）
- `ALLOW_DDL_OPERATION`：启用 DDL 操作（默认：`"false"`）



## 多数据库模式

当未指定具体数据库时，MCP-Server-MySQL 支持连接多个数据库。这使 LLM 可以查询该 MySQL 用户有权访问的任意数据库。完整

### 开启多数据库模式

要启用多数据库模式，只需要将 `MYSQL_DB` 环境变量留空。在该模式下，查询需要显式指明 schema：

```sql
-- 使用全限定表名
SELECT * FROM database_name.table_name;

-- 或使用 USE 语句切换数据库
USE database_name;
SELECT * FROM table_name;
```



### 安全配置

为了更细粒度地控制数据库操作，MCP-Server-MySQL 现在支持按 schema 设置权限。这样可以让不同数据库拥有不同级别的访问权限（只读、读写等）。

- `SCHEMA_INSERT_PERMISSIONS`：按 Schema 设置 `INSERT` 权限
- `SCHEMA_UPDATE_PERMISSIONS`：按 Schema 设置 `UPDATE` 权限
- `SCHEMA_DELETE_PERMISSIONS`：按 Schema 设置 `DELETE` 权限
- `SCHEMA_DDL_PERMISSIONS`：按 Schema 设置 DDL 权限

```
SCHEMA_INSERT_PERMISSIONS=development:true,test:true,production:false
SCHEMA_UPDATE_PERMISSIONS=development:true,test:true,production:false
SCHEMA_DELETE_PERMISSIONS=development:false,test:true,production:false
SCHEMA_DDL_PERMISSIONS=development:false,test:true,production:false
```

