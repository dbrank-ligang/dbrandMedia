import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;


function CommonHeader() {
    return (
        <Header
            style={{
                padding: 0,
                height: '100px',
                backgroundColor: '#fff',
                boxShadow: '0px 8px 6px -6px #000'

            }}>
            <h3>数字品牌榜</h3>
            <div className="demo-logo" />
        </Header>
    )
}

export default CommonHeader;
