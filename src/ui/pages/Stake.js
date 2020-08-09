import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../context'
import { Tabs, Row, Col } from 'antd';
// import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { BreadcrumbCombo, InputPane, PoolPane, OutputPane } from '../components/common'
import '../../App.css';
import { Center, Button, LabelGroup } from '../components/elements';
import { paneStyles, colStyles, rowStyles } from '../components/styles'

import { getStakeUnits, getPoolShare } from '../../math'
import { bn, convertToWei, convertFromWei, formatAPY } from '../../utils'
import {
    ETH, VETH, getPoolsContract, POOLS_ADDR, getPoolData,
    getTokenData, filterTokensByPoolSelection, getTokenContract, getStakeData
} from '../../client/web3'

const { TabPane } = Tabs;

const Stake = (props) => {

    const context = useContext(Context)

    const [mainPool, setMainPool] = useState({
        'symbol': 'XXX',
        'name': 'XXX',
        'address': ETH,
        'price': 0,
        'volume': 0,
        'vether': 0,
        'asset': 0,
        'depth': 0,
        'txCount': 0,
        'apy': 0,
        'units': 0,
        'fees': 0
    })

    const [tokenList, setTokenList] = useState([VETH])
    const [stake1Data, setStake1Data] = useState({
        address: VETH,
        symbol: 'XXX',
        balance: 0,
        input: 0,
    })
    const [stake2Data, setStake2Data] = useState({
        address: ETH,
        symbol: 'XXX',
        balance: 0,
        input: 0,
    })
    const [hideSubpane, setHideSubPane] = useState(true)
    const [estStakeUnits, setStakeUnits] = useState(0)
    const [shareData, setShareData] = useState({
        vether: 0,
        token: 0
    })
    const [approval1, setApproval1] = useState(false)
    const [approval2, setApproval2] = useState(false)

    const [stakeData, setStakeData] = useState({
        'symbol': 'XXX',
        'name': 'XXX',
        'address': ETH,
        'vether': 0,
        'asset': 0,
        'vetherStaked': 0,
        'assetStaked': 0,
        'roi': 0,
        'units': 0,
        'share': 0
     })

     const [unstakeAmount, setUnstakeAmount] = useState(0)
     const [stakeTx, setStakeTx] = useState(null)
     const [unstakeTx, setUnstakeTx] = useState(null)

    // PoolData {address, depth, balance}
    // StakeData {vether, token}
    // estStakeUnits, totalUnits

    useEffect(() => {
        if (context.connected) {
            getData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.connected])

    const getData = async () => {

        let params = queryString.parse(props.location.search)
        const mainPool = await getPoolData(params.pool, context.poolsData)
        setMainPool(mainPool)

        const stakeData = await getStakeData(params.pool, context.stakesData)
        setStakeData(stakeData)
        console.log(stakeData)

        setTokenList(await filterTokensByPoolSelection(params.pool, context.poolsData, context.walletData))
        const inputTokenData = await getTokenData(VETH, context.walletData)
        setStake1Data(await getStakeInputData(inputTokenData.balance, VETH))
        const outputTokenData = await getTokenData(params.pool, context.walletData)
        setStake2Data(await getStakeInputData(outputTokenData.balance, params.pool))
        const stake = {
            vether: inputTokenData.balance,
            token: outputTokenData.balance
        }
        const estStakeUnits = getStakeUnits(stake, mainPool)
        setStakeUnits(estStakeUnits)
        const unitData = {
            estStakeUnits: estStakeUnits,
            totalUnits: mainPool.units
        }
        const share = getPoolShare(unitData, mainPool)
        setShareData(share)
        setHideSubPane(estStakeUnits > 0 ? false : true)
        checkApproval1(VETH)
        checkApproval2(params.pool)

        console.log(shareData, stakeTx, unstakeTx)
    }

    const getStakeInputData = async (input, inputAddress) => {
        const tokenData = await getTokenData(inputAddress, context.walletData)
        const stakeData = {
            address: inputAddress,
            symbol: tokenData.symbol,
            balance: tokenData.balance,
            input: input,
        }
        return stakeData
    }

    const onStake1Change = async (e) => {
        const input = e.target.value
        setStake1Data(await getStakeInputData(convertToWei(input), stake1Data.address))
        const stake = {
            vether: convertToWei(input),
            token: stake2Data.input
        }
        setStakeUnits(getStakeUnits(stake, mainPool))
    }

    const changeStake1Token = async (token) => {
        const inputTokenData = await getTokenData(token)
        setStake1Data(await getStakeInputData(inputTokenData.balance, token))
        const stake = {
            vether: inputTokenData.balance,
            token: stake2Data.input
        }
        setStakeUnits(getStakeUnits(stake, mainPool))
    }

    const changeStake1Amount = async (amount) => {
        const finalAmt = (amount * stake1Data?.balance) / 100
        setStake1Data(await getStakeInputData(finalAmt, stake1Data.address))
        const stake = {
            vether: finalAmt,
            token: stake2Data.input
        }
        setStakeUnits(getStakeUnits(stake, mainPool))
    }

    const changeStake2Token = async (token) => {
        console.log("changing sell tokens not enabled yet")
    }

    const onStake2Change = async (e) => {
        const input = e.target.value
        setStake2Data(await getStakeInputData(convertToWei(input), ETH))
        const stake = {
            vether: stake1Data.input,
            token: convertToWei(input)
        }
        setStakeUnits(getStakeUnits(stake, mainPool))
    }

    const changeStake2Amount = async (amount) => {
        const finalAmt = (amount * stake2Data?.balance) / 100
        setStake2Data(await getStakeInputData(finalAmt, ETH))
        const stake = {
            vether: stake1Data.input,
            token: finalAmt
        }
        setStakeUnits(getStakeUnits(stake, mainPool))
    }

    const changeUnstakeAmount = async (amount) => {
        setUnstakeAmount(amount)
        // const finalAmt1 = (amount * stake1Data?.balance) / 100
        // setStake1Data(await getStakeInputData(finalAmt1, stake1Data.address))
        // const finalAmt2 = (amount * stake2Data?.balance) / 100
        // setStake1Data(await getStakeInputData(finalAmt2, stake2Data.address))
        // const stake = {
        //     vether: finalAmt1,
        //     token: finalAmt2
        // }
        // setStakeUnits(getStakeUnits(stake, mainPool))
    }

    const getEstShare = () => {
        const newUnits = (bn(estStakeUnits)).plus(bn(mainPool.units))
        const share = ((bn(estStakeUnits)).div(newUnits)).toFixed(2)
        return (share * 100).toFixed(2)
    }

    const getShare = () => {
        const newUnits = (bn(stakeData.units)).plus(bn(mainPool.units))
        const share = ((bn(stakeData.units)).div(newUnits)).toFixed(2)
        return (share * 100).toFixed(2)
    }

    // const getValueShare = () => {
    //     const unitData =  {
    //         estStakeUnits:estStakeUnits,
    //         totalUnits:mainPool.units
    //     }
    //     const share = getPoolShare(unitData, mainPool)
    //     console.log(share)
    // }

    // const getValueOfShare = () => {
    //     return '$1234.54'
    // }

    const checkApproval1 = async (address) => {
        const contract = getTokenContract(address)
        const approval = await contract.methods.allowance(context.walletData.address, POOLS_ADDR).call()
        const tokenData = await getTokenData(address, context.walletData)
        if (+approval >= tokenData.balance) {
            setApproval1(true)
        }
    }
    const checkApproval2 = async (address) => {
        if (address === ETH) {
            setApproval2(true)
        } else {
            const contract = getTokenContract(address)
            const approval = await contract.methods.allowance(context.walletData.address, POOLS_ADDR).call()
            const tokenData = await getTokenData(address, context.walletData)
            if (+approval >= tokenData.balance) {
                setApproval2(true)
            }
        }

    }

    const unlockVether = async () => {
        unlockToken(stake1Data.address)
    }

    const unlockAsset = async () => {
        unlockToken(stake2Data.address)
    }

    const unlockToken = async (address) => {
        const contract = getTokenContract(address)
        const supply = await contract.methods.totalSupply().call()
        await contract.methods.approve(POOLS_ADDR, supply).send({
            from: context.walletData.address,
            gasPrice: '',
            gas: ''
        })
    }

    const stake = async () => {
        const poolContract = getPoolsContract()
        const tx = await poolContract.methods.stake(stake1Data.input, stake2Data.input, ETH).send({
            value: stake2Data.input,
            from: context.walletData.address,
            gasPrice: '',
            gas: ''
        })
        setStakeTx(tx.transactionHash)
    }

    const unstake = async () => {
        const poolContract = getPoolsContract()
        const tx = await poolContract.methods.unstake(unstakeAmount*100, ETH).send({
            from: context.walletData.address,
            gasPrice: '',
            gas: ''
        })
        setUnstakeTx(tx.transactionHash)
    }

    const poolAttributes = {
        field1: {
            title: 'YOUR SHARE',
            data: `${getShare()}%`
        },
        field2: {
            title: 'YOUR ASSETS',
            data: `${getShare() * convertFromWei(mainPool.depth)}`
        },
        field3: {
            title: 'APY',
            data: `${formatAPY(mainPool.apy)}`
        },
    }

    return (
        <div>
            <BreadcrumbCombo title={'STAKE'} parent={'POOLS'} link={'/pools'} child={'STAKE'}></BreadcrumbCombo>
            <div style={{ marginTop: '-50px' }}>
                <Center><PoolPane
                    symbol={mainPool?.symbol}
                    balance={mainPool?.asset}
                    data={poolAttributes}
                    hideSubpane={hideSubpane} /></Center>
            </div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="STAKE" key="1">
                    <Row style={paneStyles}>
                        <Col xs={24} style={colStyles}>
                            <Row >
                                <Col xs={2}>
                                </Col>
                                <Col xs={9} style={{ marginRight: 30 }}>
                                    <InputPane
                                        tokenList={tokenList}
                                        paneData={stake1Data}
                                        onInputChange={onStake1Change}
                                        changeToken={changeStake1Token}
                                        changeAmount={changeStake1Amount}
                                    />

                                </Col>
                                <Col xs={9} style={{ marginLeft: 30 }}>

                                    <InputPane
                                        tokenList={[ETH]}
                                        paneData={stake2Data}
                                        onInputChange={onStake2Change}
                                        changeToken={changeStake2Token}
                                        changeAmount={changeStake2Amount} />

                                    <br />
                                </Col>

                                <Col xs={2}>
                                </Col>
                            </Row>
                            <Row style={rowStyles}>
                                <Col xs={12}>
                                    <Center><LabelGroup size={18} title={`${convertFromWei(estStakeUnits.toFixed(0))}`} label={'ESTIMATED UNITS'} /></Center>
                                </Col>
                                <Col xs={12}>
                                    <Center><LabelGroup size={18} title={`${getEstShare()}%`} label={'ESTIMATED SHARE'} /></Center>
                                </Col>
                                {/* <Col xs={8}>
                                <Center><LabelGroup size={18} title={`${getValueOfShare()}`} label={'STAKED VALUE'} /></Center>
                                </Col> */}
                            </Row>
                            <Row>
                                <Col xs={8}>
                                    {!approval1 &&
                                        <Center><Button type={'secondary'} onClick={unlockVether}>UNLOCK {stake1Data.symbol}</Button></Center>
                                    }
                                </Col>
                                <Col xs={8}>
                                {(approval1 && approval2) &&
                                    <Center><Button type={'primary'} onClick={stake}>STAKE IN POOL</Button></Center>
                                }
                                </Col>
                                <Col xs={8}>
                                    {!approval2 &&
                                        <Center><Button type={'secondary'} onClick={unlockAsset}>UNLOCK {stake2Data.symbol}</Button></Center>
                                    }
                                </Col>
                            </Row>
                            <br></br>

                            <br></br>


                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="WITHDRAW" key="2">
                    <Row style={paneStyles}>
                        <Col xs={24} style={colStyles}>
                            <Row>
                                <Col xs={6}>
                                </Col>
                                <Col xs={12}>
                                    <OutputPane
                                        changeAmount={changeUnstakeAmount} />
                                </Col>
                                <Col xs={6}>
                                </Col>
                            </Row>
                            <Row style={rowStyles}>
                                {/* <Col xs={12}>
                                    <Center><LabelGroup size={18} title={`${convertFromWei(estStakeUnits.toFixed(0))}`} label={'POOL UNITS'} /></Center>
                                </Col>
                                <Col xs={12}>
                                    <Center><LabelGroup size={18} title={`${getEstShare()}%`} label={'POOL SHARE'} /></Center>
                                </Col> */}
                                {/* <Col xs={8}>
                                <Center><LabelGroup size={18} title={`${getValueOfShare()}`} label={'STAKED VALUE'} /></Center>
                                </Col> */}
                            </Row>
                            <br></br>
                            <Center><Button type={'primary'} onClick={unstake}>WITHDRAW FROM POOL</Button></Center>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default withRouter(Stake)
