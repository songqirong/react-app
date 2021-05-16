import React from 'react';
import { Layout } from 'antd';
import MyHeader from './Header';
import MyContent from './Content';
import MySider from './Sider';
import './layout.scss'
const { Header,Sider, Content } = Layout;
export default function MyLayout(){
    return(
        <Layout className="my-layout">
            <Sider width="175">
                <MySider />
            </Sider>
            <Layout>
                <Header>
                    <MyHeader />
                </Header>
                <Content>
                    <MyContent />
                </Content>
            </Layout>
        </Layout>
    )
}