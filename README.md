# Gaussdx Personal Website

这是 Gaussdx 的个人学术网站，部署在 GitHub Pages：

<https://gaussdx.github.io/>

网站采用纯静态 HTML / CSS / JavaScript 编写，不依赖前端框架，也不需要构建步骤。

## 网站结构

- `index.html`：主页，包含个人简介、联系方式、About、Research interests 与页面入口
- `research.html`：研究页面，列出正在进行的论文项目
- `research/`：研究项目的独立页面，目前主要用于展示论文摘要
- `essays.html`：博客目录页
- `essays/`：博客文章独立页面
- `styles.css`：全站样式
- `script.js`：移动端导航、页脚链接与访问计数相关脚本
- `.nojekyll`：用于让 GitHub Pages 按静态文件方式直接发布站点

## 当前内容

### Research

- *The AI Model Market: A Three-Party Pricing Game—Open-Source Strategy and Free-Riding in a Platform Ecosystem*
- *Reshaping Labor Task Boundaries after AI Adoption*
- *城市政府驻地迁移的集聚效应与创新*

### Blog

博客页按时间倒序展示文章，点击标题会在新标签页打开独立文章页。

## 本地预览

这个项目不需要 `npm install` 或 `npm run build`。

可以直接用浏览器打开 `index.html`，也可以在项目根目录启动一个简单的本地服务器：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 部署

仓库名为 `gaussdx.github.io`，推送到 `main` 分支后，可通过 GitHub Pages 发布到：

<https://gaussdx.github.io/>
