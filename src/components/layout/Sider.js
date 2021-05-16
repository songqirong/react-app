import React from 'react';
import routes from '@/views';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import {logo} from '@/utils/img'
const { SubMenu } = Menu;
export default class MySider extends React.Component{
    createMenuItem(children){
        if(children){
            return children.map(ele=>(
                <Menu.Item  key={ele.id} icon={ele.icon}>
                  <Link to={ele.path.replace(':id',' ')}>{ele.text}</Link>
                </Menu.Item>
            ))
        }
    }
    createSubMenu(){
        return routes.map(ele=>{
            return (<SubMenu 
                key={ele.id} 
                icon={ele.icon} 
                title={ele.text}>
                {this.createMenuItem(ele.children)}
                </SubMenu>
            )
        })
    }
    render(){
        return(
            <div className="my-sider">
                <div style={{textAlign:"center",padding:"20px 0"}}>
                    <img src={logo} alt="焰灵姬" style={{width:"80px",height:"80px",borderRadius:"50%",border:"2px solid orange"}}></img>
                </div>
                <Menu
                    defaultSelectedKeys={['1001']}
                    defaultOpenKeys={['1']}
                    mode="inline"
                    theme="dark"
                >
                    {this.createSubMenu()}
                </Menu>
            </div>
        )
    }
}