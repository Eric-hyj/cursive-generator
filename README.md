# cursive generator 网站代码

这是一个按哥飞方法论整理出来的第一版项目骨架。

核心思路：

- 一个关键词一个页面
- 共用一套生成器逻辑
- 每个页面有独立的 `title / description / H1 / FAQ / 内链`
- 页面首屏直接可交互
- 页面正文直接输出到 HTML

## 已包含

- 首页
- `cursive text generator`
- `cursive font generator`
- `cursive signature generator`
- `cursive name generator`
- `text to cursive generator`
- `cursive text generator copy and paste`
- `cursive handwriting name generator`
- `cursive alphabet generator`
- `name in cursive generator`
- `sitemap`
- `robots`
- `canonical`

## 启动

```bash
npm install
npm run dev
```

## 后续最值得继续做

1. 接真实品牌名和域名
2. 给 `content/pages.ts` 继续补长尾页
3. 给结果区增加更丰富的风格和示例
4. 接入真实广告组件替换占位广告位
5. 增加精选结果列表或白名单聚合内容
