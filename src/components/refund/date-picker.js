import React, {useState} from "react";
import {Button, Popover} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {format} from "date-fns";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import cnLocale from "date-fns/locale/zh-CN";

/**
 * 报销卡片的日期选择组件
 */
const RefundDatePicker = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [value, setValue] = useState(new Date())
    return (
        <div>
            <Button aria-haspopup="true"
                    endIcon={<ExpandMoreIcon/>}
                    onClick={handleClick}>
                {format(value, 'yyyy-MM')}
            </Button>
            <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}
                     anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'center',
                     }}
                     transformOrigin={{
                         vertical: 'top',
                         horizontal: 'center',
                     }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={cnLocale}>
                    <DatePicker variant={'static'} value={value}
                                autoOk
                                disableFuture
                                openTo={'month'}
                                format={'yyyy-MM'}
                                onAccept={handleClose}
                                views={['year', 'month']}
                                onChange={setValue}/>
                </MuiPickersUtilsProvider>
            </Popover>
        </div>
    )
}

export default RefundDatePicker