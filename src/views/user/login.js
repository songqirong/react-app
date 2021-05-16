import React from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {fetchShopLogin} from '@/utils/api';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import '@/assets/css/login.scss';
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 5, span: 16 },
};

class Login extends React.Component{
    componentDidMount(){
        this.props.history.replace('/login')
    }
    onFinish(values){
        let key = 'updatable';
        message.loading({ content: '登录中...', key })
        fetchShopLogin(values).then(res=>{
            console.log(res)
            if(res.err===0){
                message.success({ content: res.msg, key, duration: 2 })
                this.props.history.replace('/')
                localStorage.setItem('token',res.token)
                this.props.onLogin()
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
                    name="login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish.bind(this)}
                    onFinishFailed={this.onFinishFailed.bind(this)}
                    >
                    <h1>用户登录</h1>
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link to="/">
                        Forgot password
                        </Link>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Form.Item span="16">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                            </Button>
                        </Form.Item>
                        Or <Link to='/regist'>register now!</Link>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default withRouter(Login)