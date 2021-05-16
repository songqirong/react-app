import React from 'react';
import { Select } from 'antd'
import { connect } from 'react-redux';
import {
    getCates
} from '@/store/actions/goodActions';
const { Option } = Select;
function mapStateToProps(store){
    return{
        cateData:store.good.cateData,
    }
}
function mapActionToProps(dispatch){
    return{
        getAllCates:(params)=>dispatch(getCates(params)),
    }
}
class MySelect extends React.Component{
    componentDidMount(){
        this.props.getAllCates({})
    }
    createSelect(){
        let list = this.props.cateData.data;
        return list.map(ele=>(
            <Option key={ele._id} value={ele.cate_en}>{ele.cate_zh}</Option>
        ));
    }
    selectChange(value){
        this.props.onChange(value)
    }
    render(){
        let {placeholder,cateData,value}=this.props;
        return(
            <div>
                {cateData.data&&(value?<Select placeholder={placeholder} allowClear onChange={this.selectChange.bind(this)} value={value}>
                {this.createSelect()}
            </Select>:<Select placeholder={placeholder} allowClear onChange={this.selectChange.bind(this)}>
            {this.createSelect()}
        </Select>)}
            </div>
        );
    }
}
export default connect(mapStateToProps,mapActionToProps)(MySelect)