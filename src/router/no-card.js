import React, {useEffect, useState} from "react";
import {Card as MuiCard, CardContent, Divider, Drawer} from "@material-ui/core";
import RefundDatePicker from "../components/refund/date-picker";
import NoRefundItem from "../components/refund/no-item";
import RefundBottomOperation from "../components/refund/bottom-operation";
import RefundDrawer from "../components/refund/drawer";
import axios from 'axios'

const NoCard = () => {

    const [list, setList] = useState([])
    useEffect(() => {
        axios.get('/api/refund/no/list', {
            params: {
                date: '2020-07'
            }
        }).then(resp => {
            setList(resp.data.data)
        })
    }, [])
    /**
     * 更新check状态
     * @param id 账单id
     * @param check 是否勾选
     */
    const setCheck = (id, check) => {
        let newList = list.map(item => {
            if (item.id === id) {
                return {...item, check}
            } else return item
        })
        setList(newList)
    }

    /**
     * 全选
     */
    const selectAll = () => {
        let newList = list.map(item => {
            return {...item, check: true}
        })
        setList(newList)
    }
    /**
     * 下一步
     */
    const nextStep = () => {
        setDrawerOpen(true)
    }
    /**
     * 确定
     */
    const ok = () => {
        // ajax

        setDrawerOpen(false)
        let newList = list.filter(item => item.check !== true)
        setList(newList)
    }

    const [drawerOpen, setDrawerOpen] = useState(false)

    const bottomVisible = list.some(item => item.check)

    return (
        <div>
                {/*<div style={{display: 'flex', alignItems: 'center', color: '#1976d2'}}>*/}
                {/*    <svg viewBox={'0 0 1024 1024'} fill={'#1976d2'} width={22} height={22}>*/}
                {/*        <path*/}
                {/*            d="M476.570371 602.495518a303.295322 303.295322 0 0 1 388.269202-127.97271V51.189084a51.189084 51.189084 0 0 0-48.885575-51.189084h-767.836259A51.189084 51.189084 0 0 0 0 51.189084v831.566668a67.825536 67.825536 0 0 0 27.38616 53.748538 35.320468 35.320468 0 0 0 6.14269 6.910527l73.968226 68.081481a46.070176 46.070176 0 0 0 31.993178 12.285381 47.605848 47.605848 0 0 0 32.505068-12.285381l63.474464-58.611501 62.962573 58.099611a47.093957 47.093957 0 0 0 31.993178 12.28538 49.141521 49.141521 0 0 0 32.505068-12.28538l62.962573-58.355556 70.640936 58.355556a49.653411 49.653411 0 0 0 51.189084 7.166471 328.377973 328.377973 0 0 1-71.920663-415.655361zM162.781287 197.589864h389.548929a35.832359 35.832359 0 1 1 6.14269 71.664717H162.781287a35.832359 35.832359 0 1 1-6.14269-71.664717z m155.87076 502.93275h-156.126706a36.088304 36.088304 0 0 1-6.14269-71.920663h162.013451a36.088304 36.088304 0 0 1 5.630799 71.920663h-5.374854zM162.525341 486.296297a36.088304 36.088304 0 1 1-6.14269-71.920663h395.947565a36.088304 36.088304 0 0 1 5.886744 71.920663H162.525341zM767.836259 520.848929a251.594348 251.594348 0 1 0 255.94542 251.338402 251.594348 251.594348 0 0 0-255.94542-251.338402z m120.806238 289.730215a20.987524 20.987524 0 1 1 0 41.719103h-85.48577v48.62963a21.499415 21.499415 0 0 1-42.742885 0v-48.62963h-85.229825a20.987524 20.987524 0 1 1 0-41.719103h85.48577V767.836259h-85.48577a20.731579 20.731579 0 0 1 0-41.463158h51.189084l-55.284211-54.004484a20.219688 20.219688 0 0 1 0-28.409941 21.24347 21.24347 0 0 1 29.945614 0l78.063353 76.783626 78.319299-76.783626a21.499415 21.499415 0 0 1 29.945614 0 20.219688 20.219688 0 0 1 0 28.409941l-55.028265 54.004484h55.028265a20.731579 20.731579 0 0 1 19.707797 9.725926 20.219688 20.219688 0 0 1 0 21.755361 20.731579 20.731579 0 0 1-19.707797 9.981871h-84.206043v41.719103h85.229825z"/>*/}
                {/*    </svg>*/}
                {/*    <span style={{marginLeft: '5px', fontSize: '14px'}}>未报销</span>*/}
                {/*</div>*/}
                {/*<Divider style={{margin: '10px 0'}}/>*/}
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <RefundDatePicker/>
                    <div>
                        总共: 400.00
                    </div>
                </div>

                {/*未报销账单列表*/}
                {list.map((item, index) => <NoRefundItem
                    bill={item}
                    setCheck={setCheck}
                    key={index}/>)}

                {/*底部全选和确定按钮*/}
                <RefundBottomOperation
                    selectAll={selectAll}
                    onOk={nextStep}
                    visible={bottomVisible}/>
            <Drawer anchor={"bottom"} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <RefundDrawer onOk={ok}/>
            </Drawer>
        </div>
    )
}

export default NoCard