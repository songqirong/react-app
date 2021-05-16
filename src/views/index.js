import loadable from '@loadable/component';
import React from 'react';
import { SmileOutlined,DownOutlined,FastBackwardOutlined,FastForwardOutlined} from '@ant-design/icons';
const Goods = loadable(()=>import('./good/goods'))
const Add = loadable(()=>import('./good/add'))
const Analyze = loadable(()=>import('./home/analyze'))
const Overview = loadable(()=>import('./home/overview'))
const Regist = loadable(()=>import('./user/regist'))

const routes = [
    {
        id:1,
        text:"首页管理",
        icon:<FastForwardOutlined/>,
        children:[
            {
                id:1001,
                path:'/home/analyze',
                text:'概况分析',
                icon:<DownOutlined/>,
                component:Analyze,
            },
            {
                id:1002,
                path:'/home/overview',
                text:'统计综述',
                icon:<FastBackwardOutlined/>,
                component:Overview,
            }
        ]
    },
    {
        id:2,
        text:"商品管理",
        icon:<SmileOutlined/>,
        children:[
            {
                id:2001,
                path:'/good/goods',
                text:'商品总览',
                icon:<DownOutlined/>,
                component:Goods,
                children:[
                    {
                        id:200101,
                        path:'/good/add/:id',
                        text:'商品新增',
                        icon:<FastBackwardOutlined/>,
                        component:Add,
                    }
                ]
            },
            
        ]
    },  
    {
        id:3,
        text:"人员管理",
        icon:<SmileOutlined/>,
        children:[
            {
                id:300101,
                path:'/regist',
                text:'人员注册',
                icon:<FastBackwardOutlined/>,
                component:Regist
            }
        ]
    },  
]
export default routes;