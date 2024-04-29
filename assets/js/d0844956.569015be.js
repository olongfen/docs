"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[43967],{37758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const o={id:"sqlite3",title:"SQLite3"},a=void 0,l={id:"sqlite3/sqlite3",title:"SQLite3",description:"Release",source:"@site/storage_versioned_docs/version-azureblob_v1.x.x/sqlite3/README.md",sourceDirName:"sqlite3",slug:"/sqlite3/",permalink:"/storage/azureblob_v1.x.x/sqlite3/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/sqlite3/README.md",tags:[],version:"azureblob_v1.x.x",lastUpdatedAt:1714165531e3,frontMatter:{id:"sqlite3",title:"SQLite3"},sidebar:"tutorialSidebar",previous:{title:"S3",permalink:"/storage/azureblob_v1.x.x/s3/"}},r={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=sqlite3*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["A SQLite3 storage driver using ",(0,i.jsx)(t.a,{href:"https://github.com/mattn/go-sqlite3",children:"mattn/go-sqlite3"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *sql.DB\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["SQLite3 is tested on the 2 last ",(0,i.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(t.p,{children:"And then install the sqlite3 implementation:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go get github.com/gofiber/storage/sqlite3\n"})}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import "github.com/gofiber/storage/sqlite3"\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Initialize default config\nstore := sqlite3.New()\n\n// Initialize custom config\nstore := sqlite3.New(sqlite3.Config{\n\tDatabase:        "./fiber.sqlite3",\n\tTable:           "fiber_storage",\n\tReset:           false,\n\tGCInterval:      10 * time.Second,\n\tMaxOpenConns:    100,\n\tMaxIdleConns:    100,\n\tConnMaxLifetime: 1 * time.Second,\n})\n'})}),"\n",(0,i.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'type Config struct {\n\t// Database name\n\t//\n\t// Optional. Default is "fiber"\n\tDatabase string\n\n\t// Table name\n\t//\n\t// Optional. Default is "fiber_storage"\n\tTable string\n\n\t// Reset clears any existing keys in existing Table\n\t//\n\t// Optional. Default is false\n\tReset bool\n\n\t// Time before deleting expired keys\n\t//\n\t// Optional. Default is 10 * time.Second\n\tGCInterval time.Duration\n\n\t// //////////////////////////////////\n\t// Adaptor related config options //\n\t// //////////////////////////////////\n\n\t// MaxIdleConns sets the maximum number of connections in the idle connection pool.\n\t//\n\t// Optional. Default is 100.\n\tMaxIdleConns int\n\n\t// MaxOpenConns sets the maximum number of open connections to the database.\n\t//\n\t// Optional. Default is 100.\n\tMaxOpenConns int\n\n\t// ConnMaxLifetime sets the maximum amount of time a connection may be reused.\n\t//\n\t// Optional. Default is 1 second.\n\tConnMaxLifetime time.Duration\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tDatabase:        "./fiber.sqlite3",\n\tTable:           "fiber_storage",\n\tReset:           false,\n\tGCInterval:      10 * time.Second,\n\tMaxOpenConns:    100,\n\tMaxIdleConns:    100,\n\tConnMaxLifetime: 1 * time.Second,\n}\n'})})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);