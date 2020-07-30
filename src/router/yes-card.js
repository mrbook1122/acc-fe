import React, {useEffect, useState} from "react";
import axios from 'axios'

import RefundDatePicker from "../components/refund/date-picker";
import YesRefundItem from "../components/refund/yes-item";

/**
 * 已报销
 */
const YesCard = () => {

    const [data, setData] = useState({
        loading: true,
        list: []
    })

    useEffect(() => {
        axios.get('/api/refund/no/list', {
            params: {
                date: '2020-07'
            }
        }).then(resp => {
            setData({
                loading: false,
                list: resp.data.data
            })
        })
    }, [])

    return (
        <div>
            <RefundDatePicker/>
            {data.list.map((item, index) => <YesRefundItem bill={item} key={index}/>)}
        </div>
    )
}

export default YesCard