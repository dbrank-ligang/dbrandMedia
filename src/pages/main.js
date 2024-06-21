import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import CommonAside from '../components/CommonAside'
import CommonHeader from '../components/CommonHeader'

const { Content } = Layout;

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
                // backgroundColor: 'rgb(237, 234, 225)'
            }}
        >
            <CommonHeader />
            <Layout
                style={{
                    height: 'calc(100vh - 115px)',
                    overflow: 'auto',
                    border: '1px solid red'
                }}
            >
                <CommonAside style={{minWidth: '146px'}} />
                <Content
                    style={{
                        margin: '16px',
                        overflow: 'auto'
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: '100%',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Main;
