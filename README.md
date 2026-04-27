# 设计素材大全（Design Collection）

一个基于 Vue 2 + Vue Router 的**设计资源整理网站**，用于集中收录常用设计资源链接，便于设计师和产品同学快速查找。

## 功能简介

- 顶部主导航：
  - 设计资源
  - 设计系统
  - 3D 相关
  - 竞品分析
  - 文章
  - 素材参考
- 设计资源二级分类：
  - 字体、图标、图片、动效、配色、插画、样机、文档
- 路由切换后自动回到页面顶部
- 响应式样式（移动端适配）

## 技术栈

- HTML + CSS + JavaScript
- [Vue 2](https://v2.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)

> 本项目当前通过本地脚本文件引入 `vue.js` 与 `vue-router.js`，不依赖打包器。

## 目录结构（核心）

```text
.
├── index.html
├── src/
│   ├── 1.css
│   ├── 1.js
│   └── logo.png
└── page/
    ├── shejiziyuan.js
    ├── shejixitong.js
    ├── sandxiangguan.js
    ├── jingpinfenxi.js
    ├── wenzhang.js
    ├── sucaicaikao.js
    └── shejiziyuan/
        ├── ziti.js
        ├── tubiao.js
        ├── tupian.js
        ├── dongxiao.js
        ├── peise.js
        ├── chahua.js
        ├── yangji.js
        └── wendang.js
```

## 如何启动

这是一个静态站点项目，推荐两种方式：

### 方式一：直接打开（最简单）

1. 进入项目目录
2. 双击打开 `index.html`

> 说明：如果浏览器对本地文件路由有兼容问题，建议使用方式二。

### 方式二：本地静态服务器（推荐）

在项目根目录执行：

```bash
# 任选其一
python3 -m http.server 8080
# 或
npx serve .
```

然后在浏览器打开：

- `http://localhost:8080`（python）
- 或命令行输出的地址（serve）

## 路由说明

- `/` -> 重定向到 `/shejiziyuan/ziti`
- `/shejiziyuan/*`：设计资源二级分类页面
- `/shejixitong`：设计系统
- `/sandxiangguang`：3D 相关
- `/jingpinfenxi`：竞品分析
- `/wenzhang`：文章
- `/sucaicankao`：素材参考

## 后续可优化方向

- 增加搜索与标签筛选
- 增加资源收藏与最近访问
- 增加暗色模式
- 数据改为 JSON 配置，便于维护
- 引入构建工具（如 Vite）提升开发体验
