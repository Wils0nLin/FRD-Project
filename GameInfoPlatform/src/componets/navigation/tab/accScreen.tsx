import { Button } from "@ui-kitten/components";
import React from "react";
import {Text, View } from "react-native/types";
import Alerts from "../../../utils/testing/alert";


const accScreen = (navigation: any)=>{
return (
    <View>
        <Text>Acc Screen</Text>
        <Button onPress={()=>{()=><Alerts />}}/>
    </View>
)
}