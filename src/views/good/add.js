import React from 'react';
import { Form, Input, Button, Switch, InputNumber,message } from 'antd';
import {
    Upload,
    MySelect
} from '@/components';
import {
    fetchAddGood,
} from '@/utils/api';
import {getGoodDetail,resetDetail}from '@/store/actions/goodActions'
import { connect } from 'react-redux';
const { TextArea } = Input;

function mapStateToProps(store){
    return{
        detail:store.good.detail
    }
}
function mapActionToProps(dispatch){
    return{
        getDetail:(data)=>dispatch(getGoodDetail(data)),
        resetDetail:(payload)=>dispatch(resetDetail(payload))
    }
}
class MyAdd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info:{
                name:'',
                desc:'',
                hot:false,
                img:'',
                price:0,
                rank: 0,
                cate:''
            }
        }
    }
    formRef = React.createRef();
    onFinish(values){
        console.log(values)
        let {match} = this.props
        let id = match.params.id
        values.id=id;
        let key = 'updatable';
        if(id !== " "){
            message.loading({ content: '修改中...', key })
        }else{
            message.loading({ content: '添加中...', key })
        }
        
        fetchAddGood(values).then(res=>{
            message.success({ content: res.msg, key, duration: 2 })
            this.onReset()
            if(id !== ""){
                this.props.history.goBack()
            }
        })
    }
    onReset () {
        // this.formRef.current.resetFields();
        this.props.resetDetail({
            name: '',
            desc: '',
            price: '',
            cate: '',
            img: '',
            hot: false
        })
    };
   
    componentDidMount(){
        let {match,getDetail} = this.props
        let id = match.params.id
        if(id !== ' '){
            getDetail({_id:id})
        }else{
            this.onReset()
        }
    }
    shouldComponentUpdate(props){
        this.formRef.current.setFieldsValue(props.detail)
        return true
    }
    render(){
        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 10,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 10,
            },
        };
        let {info} = this.state
        let {id} = this.props.match.params
        return(
            <div className="add">
                <Form {...layout}
                    ref={this.formRef}
                    name="addGood"
                    initialValues={info}
                    onFinish={this.onFinish.bind(this)}>
                    
                    <Form.Item
                        name="name"
                        label="商品名称"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input autoComplete="off"/>
                    </Form.Item>
                    <Form.Item
                        name="desc"
                        label="商品描述"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="商品价格"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <InputNumber /> 
                    </Form.Item>
                    <Form.Item
                        name="img"
                        label="商品名称"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Upload />
                    </Form.Item>
                    <Form.Item
                        name="cate"
                        label="商品品类"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <MySelect placeholder="请选择商品品类" />
                    </Form.Item>
                    <Form.Item
                        name="hot"
                        label="是否热销"
                        valuePropName="checked"
                    >
                        <Switch />
                    </Form.Item>
                    <Form.Item
                        name="rank"
                        label="商品排名"
                    >
                        <InputNumber min={0} max={20} />    
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        {id !== " "?'保存修改':'添加商品'}
                        </Button>
                        <Button htmlType="button" onClick={this.onReset.bind(this)} style={{marginLeft:"10px"}}>
                        重置
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            
        )
    }
    
}
export default connect(mapStateToProps,mapActionToProps)(MyAdd)



