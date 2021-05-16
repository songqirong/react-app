import React from 'react';
import { connect } from 'react-redux';
import imgBaseUrl from '@/utils/img';
import { Table, Tag, Space, Button,Row, Col, message,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
    getCateGood,
} from '@/store/actions/goodActions';
import {
    MySelect
} from '@/components';
import {fetchRemoveGood} from '@/utils/api' 
import '@/assets/css/good.scss'
function mapStateToProps(store){
    return{
        goods:store.good.goods,
        total:store.good.total,
    }
}
function mapActionToProps(dispatch){
    return{
        init:(params)=>dispatch(getCateGood(params)),
    }
}
class MyGoods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info:{
                page:1,
                cate:'',
                limit:5
            },
            visible: false,
            curRow:null
        }
    }
    showModal = (recode) => {
        this.setState({
          visible: true,
          curRow:recode
        });
    };

    handleCancel(){
        this.setState({
            visible:false
        })
    }
    handleOk(){
        let key = 'updatable';
        let {info,curRow} = this.state
        message.loading({ content: '删除中...', key })
        fetchRemoveGood({_id:curRow.key}).then(res=>{
            message.success({ content: res.msg, key, duration: 2 })
            this.props.init(info)
            this.setState({
                visible:false
            })
        })
    }
    componentDidMount(){
        let {info} = this.state
        this.props.init(info)
    }
    
    createData(){
        let {goods} = this.props;
        let arr=[];
        goods.map(ele=>{
            arr.push({
                key: ele._id,
                img: ele.img,
                name: ele.name,
                desc: ele.desc,
                price: ele.price,
                hot: ele.hot?"true":"false",
                rank:ele.rank
            })
            return false
        })
        return arr;
    }
    pageChange(key,value){
        // console.log(key,value)
        let {info} = this.state
        if(key!=='page'){
            info.page=1
        }
        info[key]=value
        this.setState({
            info
        })
        this.props.init(info)
    }
    edictor(recode){
        this.props.history.push('/good/add/'+ recode.key)
    }
    skipToAdd(){
        this.props.history.push('/good/add/ ')
    }
    render(){
        let {total} = this.props
        let {info} = this.state
        const columns=[
            {
                title:"商品图片",
                dataIndex:"img",
                key:"img",
                align:"center",
                render:img=><img src={imgBaseUrl + img} alt="商品图片" style={{width:"100px",height:"100px"}}/>
            },
            {
                title:"商品名称",
                dataIndex:"name",
                key:"name",
                align:"center",
            },
            {
                title:"商品描述",
                dataIndex:"desc",
                key:"desc",
                align:"center",
            },
            {
                title:"商品价格",
                dataIndex:"price",
                key:"price",
                align:"center",
                render:text=><span style={{color:"red"}}>{text.toFixed(2)}</span>
            },
            {
                title:"是否热销",
                dataIndex:"hot",
                key:"hot",
                align:"center",
                render:tag=>{
                    let color = tag==="false"?'geekblue' : 'green';
                    return(
                        <Tag color={color}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                }
            },
            {
                title:"商品排名",
                dataIndex:"rank",
                key:"rank",
                align:"center",
            },
            {
                title: '操作',
                key: 'action',
                align:"center",
                render: (text, record, index) => (
                  <Space size="middle">
                    <Button type="primary" onClick={this.edictor.bind(this,record)}>编辑</Button>
                    <Button type="primary" onClick={this.showModal.bind(this,record)} danger>删除</Button>
                    <Modal
                        title="Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                        okText="确认"
                        cancelText="取消"
                        >
                        <ExclamationCircleOutlined style={{color:"#FAAD14",fontSize:"20px"}}/><span style={{paddingLeft:"10px"}}>您确定要删除此商品吗？</span>
                    </Modal>
                  </Space>
                ),
            },
        ]
        return(
            <div className="goods">
                <div className="filtrate">
                    <Row align="middle">
                        <Col span={2}>品类筛选：</Col>
                        <Col span={6}> 
                            <MySelect onChange={this.pageChange.bind(this,"cate")} placeholder="请选择商品品类"/>
                        </Col>
                        <Col span={1} offset={14}>
                            <Button type="default" onClick={this.skipToAdd.bind(this)}>新增</Button>
                        </Col>
                    </Row>
                </div>
                <Table columns={columns} 
                dataSource={this.createData()}
                pagination={{
                    pageSize:5,
                    total,
                    current:info.page,
                    onChange:this.pageChange.bind(this,'page')
                }} 
                />
            </div>
        )
    }
}
export default connect(mapStateToProps,mapActionToProps)(MyGoods);