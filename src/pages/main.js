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
            <Layout>
                <CommonAside />
                {/* <Sider className='siderBox' style={{backgroundColor: 'rgb(255,221,0)'}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <Menu style={{backgroundColor: 'rgb(255,221,0)'}} defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider> */}
                <Content
                    style={{
                        margin: '16px',
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
