"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[47289],{55159:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=t(74848),i=t(28453);const s={id:"redirect",title:"\ud83d\udd04 Redirect",description:"Fiber's built-in redirect package",sidebar_position:5,toc_max_heading_level:5},a=void 0,c={id:"api/redirect",title:"\ud83d\udd04 Redirect",description:"Fiber's built-in redirect package",source:"@site/docs/core/api/redirect.md",sourceDirName:"api",slug:"/api/redirect",permalink:"/next/api/redirect",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/api/redirect.md",tags:[],version:"current",lastUpdatedAt:1714165531e3,sidebarPosition:5,frontMatter:{id:"redirect",title:"\ud83d\udd04 Redirect",description:"Fiber's built-in redirect package",sidebar_position:5,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcce Bind",permalink:"/next/api/bind"},next:{title:"\ud83c\udf0e Client",permalink:"/next/api/client"}},d={},o=[{value:"Redirect Methods",id:"redirect-methods",level:2},{value:"To",id:"to",level:3},{value:"Route",id:"route",level:3},{value:"Back",id:"back",level:3},{value:"Controls",id:"controls",level:2},{value:"Status",id:"status",level:3},{value:"RedirectConfig",id:"redirectconfig",level:3},{value:"Flash Message",id:"flash-message",level:3},{value:"Messages",id:"messages",level:4},{value:"Message",id:"message",level:4},{value:"OldInputs",id:"oldinputs",level:4},{value:"OldInput",id:"oldinput",level:4},{value:"With",id:"with",level:4},{value:"WithInput",id:"withinput",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Is used to redirect the ctx(request) to a different URL/Route."}),"\n",(0,r.jsx)(n.h2,{id:"redirect-methods",children:"Redirect Methods"}),"\n",(0,r.jsx)(n.h3,{id:"to",children:"To"}),"\n",(0,r.jsxs)(n.p,{children:["Redirects to the URL derived from the specified path, with specified ",(0,r.jsx)(n.a,{href:"#status",children:"status"}),", a positive integer that\ncorresponds to an HTTP status code."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.strong,{children:"not"})," specified, status defaults to ",(0,r.jsx)(n.strong,{children:"302 Found"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) To(location string) error\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/coffee", func(c fiber.Ctx) error {\n  // => HTTP - GET 301 /teapot \n  return c.Redirect().Status(fiber.StatusMovedPermanently).To("/teapot")\n})\n\napp.Get("/teapot", func(c fiber.Ctx) error {\n  return c.Status(fiber.StatusTeapot).Send("\ud83c\udf75 short and stout \ud83c\udf75")\n})\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="More examples"',children:'app.Get("/", func(c fiber.Ctx) error {\n  // => HTTP - GET 302 /foo/bar \n  return c.Redirect().To("/foo/bar")\n  // => HTTP - GET 302 ../login\n  return c.Redirect().To("../login")\n  // => HTTP - GET 302 http://example.com\n  return c.Redirect().To("http://example.com")\n  // => HTTP - GET 301 https://example.com\n  return c.Redirect().Status(301).To("http://example.com")\n})\n'})}),"\n",(0,r.jsx)(n.h3,{id:"route",children:"Route"}),"\n",(0,r.jsx)(n.p,{children:"Redirects to the specific route along with the parameters and queries."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["If you want to send queries and params to route, you must use the ",(0,r.jsx)(n.a,{href:"#redirectconfig",children:(0,r.jsx)(n.strong,{children:"RedirectConfig"})})," struct."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) Route(name string, config ...RedirectConfig) error\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c fiber.Ctx) error {\n  // /user/fiber\n  return c.Redirect().Route("user", fiber.RedirectConfig{\n    Params: fiber.Map{\n      "name": "fiber",\n    },\n  })\n})\n\napp.Get("/with-queries", func(c fiber.Ctx) error {\n  // /user/fiber?data[0][name]=john&data[0][age]=10&test=doe\n  return c.Route("user", RedirectConfig{\n    Params: fiber.Map{\n      "name": "fiber",\n    },\n    Queries: map[string]string{\n      "data[0][name]": "john",\n      "data[0][age]":  "10",\n      "test":          "doe",\n    },\n  })\n})\n\napp.Get("/user/:name", func(c fiber.Ctx) error {\n  return c.SendString(c.Params("name"))\n}).Name("user")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"back",children:"Back"}),"\n",(0,r.jsx)(n.p,{children:"Redirects back to refer URL. It redirects to fallback URL if refer header doesn't exists, with specified status, a\npositive integer that corresponds to an HTTP status code."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.strong,{children:"not"})," specified, status defaults to ",(0,r.jsx)(n.strong,{children:"302 Found"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) Back(fallback string) error\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c fiber.Ctx) error {\n  return c.SendString("Home page")\n})\napp.Get("/test", func(c fiber.Ctx) error {\n  c.Set("Content-Type", "text/html")\n  return c.SendString(`<a href="/back">Back</a>`)\n})\n\napp.Get("/back", func(c fiber.Ctx) error {\n  return c.Redirect().Back("/")\n})\n'})}),"\n",(0,r.jsx)(n.h2,{id:"controls",children:"Controls"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Method are ",(0,r.jsx)(n.strong,{children:"chainable"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"status",children:"Status"}),"\n",(0,r.jsx)(n.p,{children:"Sets the HTTP status code for the redirect."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Is used in conjunction with ",(0,r.jsx)(n.a,{href:"#to",children:(0,r.jsx)(n.strong,{children:"To"})}),", ",(0,r.jsx)(n.a,{href:"#route",children:(0,r.jsx)(n.strong,{children:"Route"})})," and ",(0,r.jsx)(n.a,{href:"#back",children:(0,r.jsx)(n.strong,{children:"Back"})})," methods."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) Status(status int) *Redirect\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/coffee", func(c fiber.Ctx) error {\n  // => HTTP - GET 301 /teapot \n  return c.Redirect().Status(fiber.StatusMovedPermanently).To("/teapot")\n})\n'})}),"\n",(0,r.jsx)(n.h3,{id:"redirectconfig",children:"RedirectConfig"}),"\n",(0,r.jsx)(n.p,{children:"Sets the configuration for the redirect."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Is used in conjunction with the ",(0,r.jsx)(n.a,{href:"#route",children:(0,r.jsx)(n.strong,{children:"Route"})})," method."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// RedirectConfig A config to use with Redirect().Route()\ntype RedirectConfig struct {\n  Params  fiber.Map         // Route parameters\n  Queries map[string]string // Query map\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"flash-message",children:"Flash Message"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to ",(0,r.jsx)(n.a,{href:"https://laravel.com/docs/11.x/redirects#redirecting-with-flashed-session-data",children:"Laravel"})," we can flash a message and retrieve it in the next request."]}),"\n",(0,r.jsx)(n.h4,{id:"messages",children:"Messages"}),"\n",(0,r.jsxs)(n.p,{children:["Get flash messages. Check ",(0,r.jsx)(n.a,{href:"#with",children:"With"})," for more information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) Messages() map[string]string\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c fiber.Ctx) error {\n  messages := c.Redirect().Messages()\n  return c.JSON(messages)\n})\n'})}),"\n",(0,r.jsx)(n.h4,{id:"message",children:"Message"}),"\n",(0,r.jsxs)(n.p,{children:["Get flash message by key. Check ",(0,r.jsx)(n.a,{href:"#with",children:"With"})," for more information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) Message(key string) *Redirect\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c fiber.Ctx) error {\n  message := c.Redirect().Message("status")\n  return c.SendString(message)\n})\n'})}),"\n",(0,r.jsx)(n.h4,{id:"oldinputs",children:"OldInputs"}),"\n",(0,r.jsxs)(n.p,{children:["Get old input data. Check ",(0,r.jsx)(n.a,{href:"#withinput",children:"WithInput"})," for more information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) OldInputs() map[string]string\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c fiber.Ctx) error {\n  oldInputs := c.Redirect().OldInputs()\n  return c.JSON(oldInputs)\n})\n'})}),"\n",(0,r.jsx)(n.h4,{id:"oldinput",children:"OldInput"}),"\n",(0,r.jsxs)(n.p,{children:["Get old input data by key. Check ",(0,r.jsx)(n.a,{href:"#withinput",children:"WithInput"})," for more information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) OldInput(key string) string\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/name", func(c fiber.Ctx) error {\n  oldInput := c.Redirect().OldInput("name")\n  return c.SendString(oldInput)\n})\n'})}),"\n",(0,r.jsx)(n.h4,{id:"with",children:"With"}),"\n",(0,r.jsxs)(n.p,{children:["You can send flash messages by using ",(0,r.jsx)(n.code,{children:"With()"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) With(key, value string) *Redirect\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/login", func(c fiber.Ctx) error {\n  return c.Redirect().With("status", "Logged in successfully").To("/")\n})\n\napp.Get("/", func(c fiber.Ctx) error {\n  // => Logged in successfully\n  return c.SendString(c.Redirect().Message("status"))\n})\n'})}),"\n",(0,r.jsx)(n.h4,{id:"withinput",children:"WithInput"}),"\n",(0,r.jsxs)(n.p,{children:["You can send input data by using ",(0,r.jsx)(n.code,{children:"WithInput()"}),".\nThey will be sent as a cookie."]}),"\n",(0,r.jsx)(n.p,{children:"This method can send form, multipart form, query data to redirected route depending on the request content type."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Redirect) WithInput() *Redirect\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'// curl -X POST http://localhost:3000/login -d "name=John"\napp.Post("/login", func(c fiber.Ctx) error {\n  return c.Redirect().WithInput().Route("name")\n})\n\napp.Get("/name", func(c fiber.Ctx) error {\n  // => John\n  return c.SendString(c.Redirect().OldInput("name"))\n}).Name("name")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);