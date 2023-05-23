import React from "react";
import {Text, View, StyleSheet} from 'react-native';

type Props = {
    timerDate : Date;
}

export const TimerCountDownDisplay: React.FC<Props> = ({timerDate}) => {
    return(
        <View>
            <Text>{timerDate.getMinutes().toString().padStart(2,"0")}:{timerDate.getSeconds().toString().padStart(2,"0")}</Text>
        </View>
    )
}

