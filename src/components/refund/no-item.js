import React from "react";
import {Checkbox, Grid} from "@material-ui/core";

/**
 * 未报销项
 */
const NoRefundItem = ({bill, setCheck}) => {
    const {label, money, date, remarks, moneyType} = bill
    return (
        <Grid container style={{padding: '10px 0'}} spacing={1} alignItems={"center"}>
            <Grid item>
                <Checkbox color={"primary"} checked={!!bill.check}
                          onChange={e => setCheck(bill.id, e.target.checked)}/>
            </Grid>
            <Grid item xs>
                <Grid container justify={"space-between"} spacing={1}>
                    <Grid item style={{fontWeight: '600'}}>
                        报销·{label}
                    </Grid>
                    <Grid item style={{color: '#29b6f6', fontWeight: '600'}}>
                        {money}
                    </Grid>
                </Grid>
                <Grid container justify={"space-between"} spacing={1}>
                    <Grid item style={{color: '#9e9e9e'}}>
                        {date} {remarks}
                    </Grid>
                    <Grid item style={{color: '#9e9e9e'}}>
                        {moneyType}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NoRefundItem