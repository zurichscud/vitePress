# Algolia DocSearch 配置指南

## 概述

Algolia DocSearch 是一个强大的文档搜索服务，可以为您的 VitePress 文档站点提供快速、准确的搜索功能。

## 配置步骤

### 1. 获取 Algolia 配置信息

要使用 Algolia DocSearch，您需要以下三个关键配置参数：

#### 选项 A：申请免费的 DocSearch 服务（推荐）

1. 访问 [DocSearch 申请页面](https://docsearch.algolia.com/apply/)
2. 填写申请表单，包括：
   - 网站 URL
   - 邮箱地址
   - 确认您是网站的所有者
   - 确认网站是公开可访问的
3. 等待 Algolia 团队审核（通常 1-2 周）
4. 审核通过后，您将收到包含以下信息的邮件：
   - `appId` - 应用程序 ID
   - `apiKey` - 搜索 API 密钥
   - `indexName` - 索引名称

#### 选项 B：自己配置 Algolia 账户

1. 注册 [Algolia 账户](https://www.algolia.com/)
2. 创建新的应用程序
3. 获取应用程序 ID 和 API 密钥
4. 设置爬虫来索引您的文档内容

### 2. 更新配置文件

将获得的配置信息替换到 `docs/.vitepress/config.mjs` 文件中：

```javascript
search: {
  provider: "algolia",
  options: {
    appId: "您的APP_ID",
    apiKey: "您的API_KEY",
    indexName: "您的INDEX_NAME",
    // ... 其他配置保持不变
  }
}
```

### 3. 测试搜索功能

1. 运行开发服务器：`npm run dev`
2. 在网站上点击搜索按钮或按 `Ctrl+K` / `Cmd+K`
3. 输入搜索关键词测试搜索功能

## 注意事项

- 确保您的网站是公开可访问的，Algolia 需要能够爬取您的内容
- 如果是新申请的 DocSearch，可能需要等待索引完成才能看到搜索结果
- API 密钥应该是**搜索专用的公开密钥**，不是管理员密钥
- 如果搜索不工作，检查浏览器控制台是否有错误信息

## 中文搜索优化

配置文件中已经包含了中文界面翻译，确保中文用户有良好的搜索体验。

## 故障排除

如果遇到问题：

1. 检查 API 密钥是否正确
2. 确认网站 URL 是否在 Algolia 配置中
3. 查看浏览器控制台错误信息
4. 联系 Algolia 支持团队
