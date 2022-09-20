# graphql-playground-react2

GraphQL IDE可用于更好的开发工作流（GraphSQL订阅、交互式文档和协作）。
以graphql-playground-react版本1.7.28为基础进行的二次开发.

<p align="center"><img src="https://cdn.nlark.com/yuque/0/2022/png/581678/1663640225728-a56c8b84-5fd7-43e2-836d-981f57dee155.png?x-oss-process=image%2Fresize%2Cw_937%2Climit_0"></p>

## 设置Settings

```json
{
  'editor.cursorShape': 'line', // 光标形状 值: 'line', 'block', 'underline'
  'editor.fontFamily': `'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace`, // 字体
  'editor.fontSize': 14, // 字体大小
  'editor.reuseHeaders': true, // 新选项卡 复用 上一个的 headers
  'editor.theme': 'dark', // 主题: 'dark', 'light'
  'general.betaUpdates': false,
  'prettier.printWidth': 80,
  'prettier.tabWidth': 2,
  'prettier.useTabs': false,
  'request.credentials': 'omit', // 资格证书 值: 'omit', 'include', 'same-origin'
  'schema.polling.enable': true, // 启用自动架构轮询
  'schema.polling.endpointFilter': '*localhost*', // 用于模式轮询的端点筛选器
  'schema.polling.interval': 2000, // 模式轮询间隔（毫秒）
  'schema.disableComments': boolean,
  'tracing.hideTracingResponse': true,
  'tracing.tracingSupported': true, // 设置false以从Schema提取请求中删除x-apollo-tracing头
}
```

## 作为react组件使用

1. 需要React 16版本。
2. 引入字体

```html
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Source+Code+Pro:400,700"
  rel="stylesheet"
/>
```

3. 安装

```sh
yarn add graphql-playground-react2
```

4. 使用

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Playground from 'graphql-playground'

ReactDOM.render(
  <Playground endpoint='https://api.graph.cool/simple/v1/swapi' />,
  document.body,
)
```
