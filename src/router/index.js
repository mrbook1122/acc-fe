import React, {useState} from "react";

import {Tabs, Tab, Card, CardContent} from "@material-ui/core";
import YesCard from "./yes-card";
import NoCard from "./no-card";

const TabPanel = ({value, index, children}) => {
    return (
        <div hidden={value !== index}>
            {children}
        </div>
    )
}

const App = () => {

    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card variant={"outlined"}>
            <CardContent>
                <Tabs value={value} centered onChange={handleChange}>
                    <Tab label={'未报销'}/>
                    <Tab label={'已报销'}/>
                </Tabs>
                <TabPanel value={value} index={0}><NoCard/></TabPanel>
                <TabPanel value={value} index={1}><YesCard/></TabPanel>
            </CardContent>
        </Card>
    )
}

export default App