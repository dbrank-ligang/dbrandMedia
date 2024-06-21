import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MailOutlined,
    CalendarOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css';
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const MenuList = [
    {
        key: 'OverView',
        // icon: <MailOutlined />,
        label: '本品概览',
    },
    {
        key: 'Contrast',
        // icon: <CalendarOutlined />,
        label: '竞品对比',
    }

]




const CommonAside = () => {
    // const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const selectMenu = (e) => {
        console.log(e)
        navigate(e.key)
    }

    return (
        <Sider className='siderBox'>
            <Menu style={{ backgroundColor: 'rgb(255,221,0)' }} defaultSelectedKeys={['1']} mode="inline" items={MenuList} onClick={selectMenu} />
        </Sider>
    )
}
export default CommonAside;