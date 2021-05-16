import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import{
    todoAdd,
    todoDel,
    todoUpd,
    todoClear
} from '@/store/actions/todoActions'
function mapStateToProps(store){
    return{
        list:store.todo.list
    }
}
function mapActionToProps(dispatch){
    return{
        listAdd:(payload)=>dispatch(todoAdd(payload)),
        listDel:(payload)=>dispatch(todoDel(payload)),
        listUpd:(payload)=>dispatch(todoUpd(payload)),
        listClear:()=>dispatch(todoClear())
    }
}

class myOverview extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:''
        }
    }
    msgChange(e){
        this.setState({
            msg:e.target.value
        })
    }
    listChange(type,e){
        if(type==="listAdd"){
            if(e.keyCode===13){
                this.props.listAdd({id:Date.now(),task:e.target.value})
                this.setState({
                    msg:''
                })
            }
        }else if(type==="listDel"){
            // console.log(e)
            this.props.listDel(e)
        }else if(type==="listClear"){
            this.props.listClear()
        }else if(type==="listUpd"){
            this.props.listUpd({id:e,task:"找工作"})
        }
    }
    createList(){
        let {list} = this.props;
        let arr=[];
        list.map(ele=>{
            arr.push(<div key={ele.id} style={{border:"1px solid #ccc",padding:"20px"}}>
                        <span>{ele.id}</span>
                        <span>-</span>
                        <span onClick={()=>this.listChange("listUpd",ele.id)}>{ele.task}</span>
                        <Button type="primary" onClick={()=>this.listChange("listDel",ele.id)} danger>删除</Button>
                    </div>
            )
            return false; 
        })  
        return arr
    }
    render(){
        return(
            <div className="overview">
                <input 
                    value={this.state.msg}
                    type="text"
                    onChange={(e)=>this.msgChange(e)}
                    onKeyUp={(e)=>this.listChange('listAdd',e)}
                />
                <Button type="primary" onClick={()=>this.listChange("listClear")} danger>清除</Button>
               {this.createList()}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(myOverview);