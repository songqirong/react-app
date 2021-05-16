# 项目创建

cnpm install create-react-app -g
create-react-app react-antd-cms
cd react-antd-cms

npm start  // 启动项目
npm run build  // 打包上线

注意：暴露隐藏文件的做法
git init
git add .
git commit -m 'first'
npm run eject  // 把隐藏文件都暴露出来

npm start  // 运行项目


# 环境配置

1、自定义端口号 /scripts/start.js 搜索 PORT

2、配置 @ 别名 /config/webpack.config.js 里找到 resolve.alias

3、favicon制作 找免费在线制作网站，下载 32*32的尺寸。

4、sass安装 只用安装 node-sass 这个包即可。

5、本地环境怎么配置代码

安装 cnpm install http-proxy-middleware -D 新建代理文件 src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://xxx.com',   // 目标服务器
      changeOrigin: true
    })
  );
};
重启服务


# 项目架构

安装antd
axios封装与跨域处理
layout布局：路由的安装与配置





# redux

0、概述

Flux 是Facebook官方提出一种应用程序数据管理思想

Redux 是其它团队基于Flux思想而开发出来、用于React项目架构的数据容器

Redux在中大型的React项目，都会配套使用。
  redux
  react-redux 用于把redux和react联结起来，<Provider>  connect()(Home)

Mobx，非常小而美的React项目。
  mobx
  mobx-react 用于把mobx和react应用连接的一个工具 <Provider>  @inject  @observer

核心概念：

action 触发行为，主要的作用是用来触发数据改变的行为
reducer  它的作用就是用来改变store中的数据
store 这是共享数据的存储中心

1、安装
```
cnpm install redux -S   // 创建store
```
2、定义reducer
```
// 定义reducer需要两个参数，分别是当前需要被共享的state、用于改变state的action信号
// action={type, payload}，type用于指明你想做什么，payload指明你想得到的结果。
function reducer(state={}, action) {
  switch(action.type) {
    case '1':
      // 先深复制，再修改
      return state
    case '2':
      return state
    default:
      return state
  }
}
```
在实际工作中，reducer要拆分成多个子reducer，也就是多个纯函数。
最终在创建store时，要使用combineReducers进行合并(参见store创建代码)

3、在src/store/index.js创建store并抛出
```
import { createStore, combineReducers } from 'redux'
// 创建store，必须要传第一个参数是reducer，它是一个纯函数，其作用是用来改变store的

import reducer1 from './reducers/r1'
import reducer2 from './reducers/r2'

const reducer = combineReducers({reducer1, reducer2})
const store = createStore(reducer)
export default store
```

4、在App.js中进行上下文关联
```
cnpm install react-redux -S   // 把store与react组件关联起来
```
在App.js中引入store，并使用上下文进行关联
```
import { Provider } from 'react-redux'
import store from '@/store'

return(
  <Provider store={store}></Provider>
)
```
5、在页面组件中使用store
```
import { connect } from 'react-redux'

// 把state中的数据，变成当成组件的props
function mapStateToProps(state){
  return {
    msg: state.msg
  }
}
// 把actions中方法，放在当前组件的props
function mapActionToProps(dispatch) {
  return {
    changeMsg: ()=>{
      // 派发一个action到reducer去
      console.log('changeMsg')
    }
  }
}
export default connect(mapStateToProps,mapActionToProps)(Home)
```

6、redux异步action

redux默认只支持同步的action。那么异步的action行为（比如调接口）该怎么办呢？
需要使用第三方中间件（redux-thunk）,把一步异步的action转化成三个同步的actoin，以此来解决“redux只支持同步action”特点。
这三个同步的action，分别是：第一个action的作用告诉reducer有一个异步行为触发；第二个action告诉reducer异步行为执行成功了,可以更新state了；第三个action是告诉reducer这个异步行为失败了。

7、面试相关

  你如何理解redux？flux，地位，三个概念，单向数据流。
  store特点：单一数据源、只读、使用纯函数reducer进行修改。
  react-redux：Provider connect(mapStateToProps,mapActionToProps)
  redux中间件：redux-thunk
  dispatch() 发送一个action到reducer


# 项目经验

管理系统: toB  企业内部  给其它公司的使用

管理系统开发：

  功能开发：角色与权限功能、用户管理、菜单配置
  业务开发：不同的行业不一样，需要时间去熟悉业务

初级工程师：项目能够跑起来、能胜任功能和业务开发、常规的第三方模块能够上手、样式基本功
中级工程师：……


管理系统的登录流程：
  -> 在登录界面登录
  -> 登录成功得到一个token（token一般有时间限制（1天刷新一次）refreshToken）
  -> 存储在localStorage中
  -> 进入管理系统用token换取初始化内容（菜单、用户信息）

实战：
  -> 表单使用  商品新增
  -> 表格使用  筛选与搜索
  -> 登录流程
