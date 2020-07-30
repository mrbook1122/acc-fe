import React from "react";

import {Button, Grid} from "@material-ui/core";
import SelectAllIcon from '@material-ui/icons/SelectAll';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import styles from './bottom-operation.module.css'

const RefundBottomOperation = ({visible, selectAll, onOk}) => {
    return (
        <Grid container justify={"space-around"} className={visible ? styles.visible : styles.hidden}>
            <Grid item>
                <Button size={"large"} onClick={selectAll} startIcon={<SelectAllIcon/>}>全选</Button>
            </Grid>
            <Grid item>
                <Button size={"large"} onClick={onOk} startIcon={<DoneAllIcon/>}>下一步</Button>
            </Grid>
        </Grid>
    )
}

export default RefundBottomOperation