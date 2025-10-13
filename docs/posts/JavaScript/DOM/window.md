# window

## Event

## HTML生命周期

1. **DOMContentLoaded** – 初始 HTML 被完全加载并解析完成（不等待 css/img）
2. **load** – 页面所有资源（css/img/iframe 等）全部加载完
3. **beforeunload** – 页面即将卸载（关闭）（可弹出确认框）
4. **unload** – 文档正在卸载（已无法阻止）
5. **pageshow** – 从 bfcache 中恢复页面（首次进入也触发）
6. **pagehide** – 页面进入 bfcache 或卸载
7. **visibilitychange** – 选项卡可见状态变化（切 Tab/最小化等）
8. **hashchange** – URL hash（# 后面）部分变化
9. **popstate** – 因用户点击后退/前进导致历史记录条目变化

## 窗口

1. **resize** – 视口尺寸变化
2. **scroll** – 文档或元素滚动
3. **fullscreenchange** – 进入/退出全屏
4. **fullscreenerror** – 全屏请求失败



## 网络

1. **online** – 浏览器联网
2. **offline** – 浏览器断网

## 存储

1. **storage** – 同一源下其他窗口修改 localStorage 时触发