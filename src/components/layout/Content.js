import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';
import routes from '@/views';
export default class Content extends React.Component{
    
    createRoute(){
        let arr=[];
        function create(children){
            children.map(ele=>{
                arr.push(<Route exact path={ele.path} key={ele.id} component={ele.component}></Route>)
                if(ele.children){
                    create(ele.children);
                }
                return false;
            })
        }
        routes.map(ele=>{
            create(ele.children)
            return false;
        })
        // console.log(arr);
        return arr;
        
    }
    render(){
        return(
            <div className="my-content">
                <Switch>
                    {this.createRoute()}
                    <Redirect from="/*" to="/home/analyze"/>
                </Switch>
            </div>
        )
    }
}