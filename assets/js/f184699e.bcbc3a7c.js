"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[31081],{85673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=t(74848),l=t(28453);const r={id:"html",title:"HTML"},s=void 0,a={id:"html/html",title:"HTML",description:"Release",source:"@site/template_versioned_docs/version-amber_v2.x.x/html/README.md",sourceDirName:"html",slug:"/html/",permalink:"/template/amber_v2.x.x/html/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/template/edit/master/html/README.md",tags:[],version:"amber_v2.x.x",lastUpdatedAt:1714165531e3,frontMatter:{id:"html",title:"HTML"},sidebar:"tutorialSidebar",previous:{title:"Handlebars",permalink:"/template/amber_v2.x.x/handlebars/"},next:{title:"Golang Templates Cheatsheet",permalink:"/template/amber_v2.x.x/html/TEMPLATES_CHEATSHEET"}},h={},o=[{value:"Basic Example",id:"basic-example",level:3},{value:"Example with embed.FS",id:"example-with-embedfs",level:3},{value:"Example with innerHTML",id:"example-with-innerhtml",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/template?filter=html*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["HTML is the official Go template engine ",(0,i.jsx)(n.a,{href:"https://golang.org/pkg/html/template/",children:"html/template"}),", to see the original syntax documentation please ",(0,i.jsx)(n.a,{href:"/template/amber_v2.x.x/html/TEMPLATES_CHEATSHEET",children:"click here"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Info:"})}),"\n",(0,i.jsxs)(n.p,{children:["All templates within the specified view directory are analyzed and compiled at the beginning to increase the performance when using them.\nThus it should be noted that no ",(0,i.jsx)(n.code,{children:"definition"})," with the same name should exist, otherwise they will overwrite each other.\nFor templating the ",(0,i.jsx)(n.code,{children:"{{embed}}"})," tag should be used"]}),"\n",(0,i.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/index.html"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'{{template "partials/header" .}}\n\n<h1>{{.Title}}</h1>\n\n{{template "partials/footer" .}}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/partials/header.html"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<h2>Header</h2>\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/partials/footer.html"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<h2>Footer</h2>\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/layouts/main.html"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Main</title>\n  </head>\n\n  <body>\n    {{embed}}\n  </body>\n</html>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/template/html/v2"\n)\n\nfunc main() {\n\t// Create a new engine\n\tengine := html.New("./views", ".html")\n\n\t// Or from an embedded system\n\t// See github.com/gofiber/embed for examples\n\t// engine := html.NewFileSystem(http.Dir("./views", ".html"))\n\n\t// Pass the engine to the Views\n\tapp := fiber.New(fiber.Config{\n\t\tViews: engine,\n\t})\n\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\t// Render index\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t})\n\t})\n\n\tapp.Get("/layout", func(c *fiber.Ctx) error {\n\t\t// Render index within layouts/main\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t}, "layouts/main")\n\t})\n\n\tapp.Get("/layouts-nested", func(c *fiber.Ctx) error {\n\t\t// Render index within layouts/nested/main within layouts/nested/base\n\t\treturn c.Render("index", fiber.Map{\n\t\t\t"Title": "Hello, World!",\n\t\t}, "layouts/nested/main", "layouts/nested/base")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-with-embedfs",children:"Example with embed.FS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "net/http"\n    "embed"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n)\n\n//go:embed views/*\nvar viewsfs embed.FS\n\nfunc main() {\n    engine := html.NewFileSystem(http.FS(viewsfs), ".html")\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index - start with views directory\n        return c.Render("views/index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"and change the starting point to the views directory"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/index.html"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'{{template "views/partials/header" .}}\n\n<h1>{{.Title}}</h1>\n\n{{template "views/partials/footer" .}}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-with-innerhtml",children:"Example with innerHTML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "embed"\n    "html/template"\n    "log"\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n)\n\n//go:embed views/*\nvar viewsfs embed.FS\n\nfunc main() {\n    engine := html.NewFileSystem(http.FS(viewsfs), ".html")\n    engine.AddFunc(\n        // add unescape function\n        "unescape", func(s string) template.HTML {\n            return template.HTML(s)\n        },\n    )\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{Views: engine})\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index\n        return c.Render("views/index", fiber.Map{\n            "Title": "Hello, <b>World</b>!",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"and change the starting point to the views directory"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"./views/index.html"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<p>{{ unescape .Title}}</p>\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"html output"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<p>Hello, <b>World</b>!</p>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);