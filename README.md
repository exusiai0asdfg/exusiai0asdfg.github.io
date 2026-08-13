# blog

个人博客（原 my-blog 的 Life 部分），Hugo + Blowfish 主题。

## 本地开发

```bash
hugo server          # http://localhost:1313
```

## 构建

```bash
hugo                 # 输出到 public/
```

## 部署

Vercel：仓库根指向本目录，构建命令 `hugo`，输出目录 `public`。
当前线上域名：https://exusiaiblog.vercel.app/

## 目录

- `content/` — 文章（posts 所思所想 / notes 学习笔记 / plan 生涯规划 / moments 动态）
- `content/life/` — Life 主页（根路径 `/` 与其显示相同内容）
- `layouts/` — 主题覆写与自定义 partial
- `themes/blowfish/` — 主题（git submodule）

## 与 personal-page 的关系

页面底部的 "Personal Page" 链接指向 `https://shimingli.vercel.app/`（personal-page 项目的部署地址）。
如需修改，编辑 `layouts/partials/extend-footer.html`。
