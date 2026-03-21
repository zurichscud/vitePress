# MCP安装

```
# 基本语法
claude mcp add [options] <name> -- <command> [args...]
```



## 插件MCP

- 插件在插件根目录的 `.mcp.json` 中或在 `plugin.json` 中内联定义 MCP 服务器

```json
{
  "database-tools": {
    "command": "${CLAUDE_PLUGIN_ROOT}/servers/db-server",
    "args": ["--config", "${CLAUDE_PLUGIN_ROOT}/config.json"],
    "env": {
      "DB_URL": "${DB_URL}"
    }
  }
}
```

**插件 MCP 服务器的优势**：

- **捆绑分发**：工具和服务器打包在一起
- **自动设置**：无需手动 MCP 配置
- **团队一致性**：安装插件时每个人都获得相同的工具



## 管理MCP

```sh
# 列出所有配置的服务器
claude mcp list

# 获取特定服务器的详细信息
claude mcp get github

# 删除服务器
claude mcp remove github

# （在 Claude Code 中）检查服务器状态
/mcp
```





## MCP安装范围