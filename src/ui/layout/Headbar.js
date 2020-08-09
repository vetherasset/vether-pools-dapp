import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../context'
import { Link } from "react-router-dom";
import { Row, Col, Button, Layout, Menu, Drawer } from 'antd';
import { UserOutlined, LoadingOutlined } from '@ant-design/icons';
import '../../App.css';

import Web3 from 'web3'
import axios from 'axios'

import { message } from 'antd';

import WalletDrawer from './WalletDrawer'
import { getAddressShort, } from '../../utils'
import { getListedPools, getPoolsData, getWalletData, getStakesData } from '../../client/web3'

const { Header } = Layout;

const Headbar = (props) => {

    const context = useContext(Context)
    const [connecting, setConnecting] = useState(false)
    const [connected, setConnected] = useState(false)
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        connectWallet()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const connectWallet = async () => {
        setConnecting(true)
        window.web3 = new Web3(window.ethereum);
        const accountConnected = (await window.web3.eth.getAccounts())[0];
        if (accountConnected) {
            message.loading('Loading pools', 5);
            let poolArray = context.poolArray ? context.poolArray : await getListedPools()
            let poolsData = context.poolsData ? context.poolsData : await getPoolsData(poolArray)
            message.loading('Loading stake data', 3);
            let stakesData = context.stakesData ? context.stakesData : await getStakesData(accountConnected, poolArray)
            if (!context.poolsData) {
                context.setContext({ 'poolArray': poolArray })
                context.setContext({ 'poolsData': poolsData })
                context.setContext({ 'stakesData': stakesData })
            }
            message.loading('Loading wallet data', 3);
            let walletData = await getWalletData(poolArray)
            context.setContext({ 'walletData': walletData })
            context.setContext({ 'connected': true })

            await getVetherPrice()
            setConnecting(false)
            setConnected(true)
            message.success('Loaded!',  2);
        } else {
            await ethEnabled()
            setConnected(false)
        }
    }

    const ethEnabled = () => {
        console.log('connecting')
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            window.ethereum.enable();
            setConnecting(true)
            return true;
        }
        return false;
    }

    const getVetherPrice = async () => {
        let resp = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=vether&vs_currencies=usd')
        console.log(resp.data.vether.usd)
        context.setContext({ 'vetherPrice': resp.data.vether.usd })
        return
    }

    const addr = () => {
        return getAddressShort(context.walletData?.address)
    }

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <Header>
            <Row>
                <Col xs={20}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key='1'>
                            <Link to={"/overview"}>OVERVIEW</Link>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <Link to={"/pools"}>POOLS</Link>
                        </Menu.Item>
                        {/* <Menu.Item key="3">
                            <Link to={"/cdps"}>CDPs</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={"/anchor"}>PRICE ANCHOR</Link>
                        </Menu.Item>  */}
                        <Menu.Item key="5">
                            <Link to={"/about"}>ABOUT</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={4} style={{ textAlign: 'right' }}>
                    {!connected && !connecting &&
                        <Button type="primary" onClick={connectWallet}>CONNECT</Button>
                    }
                    {connecting &&
                        <Button type="primary" icon={<LoadingOutlined />}>CONNECTING</Button>
                    }
                    {connected &&
                        <Button type="primary" icon={<UserOutlined />} onClick={showDrawer}>{addr()}</Button>
                    }
                </Col>
            </Row>
            <Drawer
                title={context.walletData?.address}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width={300}
            >
                <WalletDrawer />
            </Drawer>

        </Header>
    )
}

export default Headbar