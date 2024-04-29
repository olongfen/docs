"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[88528],{27219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var i=t(74848),s=t(28453);const r={id:"badger",title:"Badger"},a=void 0,o={id:"badger/badger",title:"Badger",description:"Release",source:"@site/storage_versioned_docs/version-coherence_v0.x.x/badger/README.md",sourceDirName:"badger",slug:"/badger/",permalink:"/storage/coherence_v0.x.x/badger/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/badger/README.md",tags:[],version:"coherence_v0.x.x",lastUpdatedAt:1714165531e3,frontMatter:{id:"badger",title:"Badger"},sidebar:"tutorialSidebar",previous:{title:"Azure Blob",permalink:"/storage/coherence_v0.x.x/azureblob/"},next:{title:"Bbolt",permalink:"/storage/coherence_v0.x.x/bbolt/"}},l={},g=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=badger*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-badger.yml?label=Tests",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["A fast key-value DB using ",(0,i.jsx)(n.a,{href:"https://github.com/dgraph-io/badger",children:"dgraph-io/badger"})]}),"\n",(0,i.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *badger.DB\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Badger is tested on the 2 last ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then install the badger implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/badger\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/badger"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := badger.New()\n\n// Initialize custom config\nstore := badger.New(badger.Config{\n\tDatabase:   "./fiber.badger",\n\tReset:      false,\n\tGCInterval: 10 * time.Second,\n})\n'})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type Config struct {\n\t// Database name\n\t//\n\t// Optional. Default is "./fiber.badger"\n\tDatabase string\n\n\t// Reset clears any existing keys in existing Table\n\t//\n\t// Optional. Default is false\n\tReset bool\n\n\t// Time before deleting expired keys\n\t//\n\t// Optional. Default is 10 * time.Second\n\tGCInterval time.Duration\n\n\t// BadgerOptions is a way to set options in badger\n\t//\n\t// Optional. Default is badger.DefaultOptions("./fiber.badger")\n\tBadgerOptions badger.Options\n\n\t// Logger is the default logger used by badger\n\t//\n\t// Optional. Default is nil\n\tLogger badger.Logger\n\n\t// UseLogger define if any logger will be used\n\t//\n\t// Optional. Default is false\n\tUseLogger bool\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tDatabase:      "./fiber.badger",\n\tReset:         false,\n\tGCInterval:    10 * time.Second,\n\tBadgerOptions: badger.DefaultOptions("./fiber.badger").WithLogger(nil),\n\tLogger:        nil,\n\tUseLogger:     false,\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);