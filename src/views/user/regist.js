import React from 'react';
import { Form, Input, Button,message } from 'antd';
import {fetchShopRegist} from '@/utils/api'
import '@/assets/css/login.scss'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
};

class Regist extends React.Component{
    onFinish(values){
        let key = 'updatable';
        message.loading({ content: '注册中...', key })
        fetchShopRegist(values).then(res=>{
            console.log(res)
            if(res.err===0){
                message.success({ content: res.msg, key, duration: 2 })
            }else{
                message.warning({ content: res.msg, key, duration: 2 })
            }
        })
    }
    onFinishFailed(){

    }
    render(){
        return(
            <div className='login'>
                <Form
                    {...layout}
                    name="regist"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish.bind(this)}
                    onFinishFailed={this.onFinishFailed.bind(this)}
                    >
                    <h1>用户注册</h1>
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true,pattern:/^1(3|4|5|7|8)[0-9]{9}$/ ,message: '用户名格式不正确' }]}
                    >
                        <Input autoComplete="off"/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true,pattern:/^[a-zA-Z0-9][a-zA-Z0-9\@\#\$\%\*\_]{5,}$/, message: '密码格式不正确' }]}
                    >
                        <Input.Password autoComplete="off"/>
                    </Form.Item>

                    <Form.Item
                        name="password2"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: '请确认你的密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('两次输入的密码不一致');
                            },
                        }),
                        ]}
                    >
                        <Input.Password autoComplete="off"/>
                    </Form.Item>


                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Regist