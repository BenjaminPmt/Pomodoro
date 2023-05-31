import React from "react";
import {Text, View, StyleSheet} from 'react-native';

export type TimerModes = "Focus" | "Break";
type Props = {
    timerMode : TimerModes;
}

export const TimerModeDisplay: React.FC<Props> = ({timerMode}) => {
    return(
        <View>
            <Text>{timerMode} Time</Text>
        </View>
    )
}