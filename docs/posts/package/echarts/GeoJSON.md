# GeoJSON

**GeoJSON 是一种基于 JSON 的地理空间数据交换格式**。它定义了几何对象、属性以及它们的空间范围，是目前 Web GIS（如 Mapbox, Leaflet, ECharts, Three.js）中最通用的标准。

## 核心结构

```ts
interface GeoJSON {
  type: "FeatureCollection";
  features: Array<{
    type: "Feature";
    geometry: {
      type: "Point" | "LineString" | "Polygon" | "MultiPolygon"; // 几何类型
      coordinates: number[] | number[][] | number[][][];        // 经纬度坐标 [经度, 纬度]
    };
    properties: Record<string, any>; // 业务属性，比如城市名、人口、颜色
  }>;
}
```



## type

`type` 决定了这段 JSON 应该按什么规则去解析。


- Feature

一个地理实体

```json
{
  "type": "Feature",
  "properties": {},
  "geometry": {}
}
```

- FeatureCollection

多个地理实体构成的集合

```json
{
  "type": "FeatureCollection",
  "features": []
}
```

## properties

在 GeoJSON 规范中，**`properties` 字段就是专门留给业务层自定义数据的“垃圾筐”或“百宝箱”**。

下表是阿里云提供的业务层信息：

```http
https://geo.datav.aliyun.com/areas_v3/bound/110000_full.json
```

```json
{
  "adcode": 110000,
  "name": "北京市",
  "center": [116.405285, 39.904989],
  "centroid": [116.41995, 40.18994],
  "childrenNum": 16,
  "level": "province",
  "parent": {
    "adcode": 100000
  },
  "subFeatureIndex": 0,
  "acroutes": [100000]
}
```

1. **级联下钻（Drill-down）的控制中心**

这是最核心的作用。当你点击地图上的“北京市”时，程序需要知道下一步去哪里加载数据。

- **`adcode: 110000`**：这是行政区划代码（身份证号）。你会用它拼接 URL 去请求下一级县区的 GeoJSON 文件（例如：`https://geo.datav.aliyun.com/areas_v3/bound/110000_full.json`）。
- **`childrenNum: 16`**：告诉你北京市下辖 16 个区。前端可以据此判断是否还能继续“点进去”。如果为 0，则停止下钻逻辑。
- **`acroutes: [100000]`**：这是路径追踪。记录了北京市属于“中国 (100000)”。在做面包屑导航（中国 > 北京市，`[100000, 110000]`）时非常有用。

2. **视觉锚点与标签定位**

GeoJSON 里的边界数据（多边形）只告诉你形状，但文字标在哪里最合适？

- **`center` (导航中心)**：通常是市政府所在地。用于地图初始化时 `map.setCenter()`。
- **`centroid` (几何中心)**：这是该区域图形的重心。
- 在 ECharts 中，省份名称“北京市”默认会显示在 `centroid` 坐标上。如果用 `center`，文字可能会偏离视觉中心。

## geometry

`geometry` 就是渲染在 Canvas 或 SVG 上的**“坐标路径”**。可以在`https://geojson.io/#map=4.05/32.12/112.13/-8.8/17`尝试绘制

### 点

**`Point`**: 单个点。`coordinates: [116, 39]`。

**`MultiPoint`**: 多个散点。`coordinates: [[116, 39], [121, 31]]`。

**用途**：标记摄像头、充电桩、城市中心点。

### 线

**`LineString`**: 两个或多个点连接成的折线。`coordinates: [[x1, y1], [x2, y2], ...]`

**`MultiLineString`**: 多条不连续的线。`coordinates: [[[x,y], [x,y], [x,y], ...],...]`

**用途**：道路、地铁线路、河流。

### 面

**`Polygon`**: 闭合的多边形。`coordinates: [[[x,y], [x,y], [x,y], [x,y],...],...]`

**`MultiPolygon`**: 多个独立的面（比如有飞地的省份，或者由多个岛屿组成的地区）。`coordinates: [[[[x,y], [x,y], [x,y], [x,y],...],...],...]`

**用途**：行政区划边界、湖泊、建筑轮廓。
