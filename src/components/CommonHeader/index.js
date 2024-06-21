import React from 'react';
import { Layout, Dropdown, Space } from 'antd';
import './index.css'
import logo from '../../assets/logo.png'
import { DownOutlined } from '@ant-design/icons';
const { Header } = Layout;
const items = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];


function CommonHeader() {
    return (
        <Header className='headerBox'>
            <div style={{ width: '230px', height: '66px' }}><img src={logo} /></div>
            <ul className='headerBox_ul'>
                <li>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                品牌切换
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </li>
                <li>张三</li>
                <li>退出登录</li>
            </ul>

            {/* <div className="demo-logo" /> */}
        </Header>
    )
}

export default CommonHeader;
