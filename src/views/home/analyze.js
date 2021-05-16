import React from 'react';
import {connect} from 'react-redux';
import {
    getUser
}from '@/store/actions/userActions'
function mapStateToProps(store){
    return {
        users:store.user.users
    }
}
function mapActionToProps(dispatch){
    return {
        init:(params)=>dispatch(getUser(params))
    }
}
class MyAnalyze extends React.Component{
    componentDidMount(){
        this.props.init({});
    }
    createElement(){
        let {users} = this.props;
        return users.map(ele=>{
            return (<div key={ele._id} style={{border:"1px solid #ccc",padding:"20px"}}>
                <span>{ele._id}</span>
                <span>-</span>
                <span>{ele.username}</span>    
            </div>)   
        })
    }
    render(){
        // console.log(this.props)
        return(
            <div className="analyze">
                {this.createElement()}
            </div>
        )
    }
}
export default connect(mapStateToProps,mapActionToProps)(MyAnalyze);