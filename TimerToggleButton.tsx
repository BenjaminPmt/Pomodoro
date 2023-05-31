import React from "react";
import {Text, View, StyleSheet, Button, Pressable} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

// FC pour function component
type Props = {
    isTimerRunning: boolean;
    stopTimer: () => void;
    startTimer: () => void;
}
export const TimerToggleButton: React.FC<Props> = ({isTimerRunning, startTimer, stopTimer}) => {
    return(
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
            <View>
                <FontAwesome name={isTimerRunning ? 'pause' : "play"} size={125} />
            </View>
        </Pressable>
    )
}