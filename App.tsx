// @ts-ignore
import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList, Button
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'
import {colors} from './utils/Colors';
import {spacing} from './utils/Sizes';

const defaultsItems = [...Array(5).keys()].map((key) => {
    return {key: key, text: `text ${key}`}
});

export default function App() {

    const [goals, setGoals] = useState(defaultsItems)
    const [isAddMode, setIsAddMode] = useState(false)
    const addModeHandler = () => {
        setIsAddMode(true)
    }
    const cancelAddModeHandler = () => {
        setIsAddMode(false)
    }
    const addGoalHandler = (inputGoal: string) => {
        const newGoal = {key: Math.random(), text: inputGoal}
        setGoals((goals: any) => [...goals, newGoal])
        cancelAddModeHandler()
    }
    const removeGoal = (goalId: number) => {
        const nextGoals = goals.filter((goal: { key: number }) => goal.key !== goalId)
        setGoals(nextGoals)
    }

    return (
        <LinearGradient
            colors={[colors.bgStart, colors.bgMid, colors.bgEnd]}
            locations={[0.0, 0.5, 1.0]}
            style={styles.container}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <SafeAreaView style={styles.safeArea}>
                <Button title={"Add goal"} onPress={addModeHandler}/>
                <GoalInput
                    onAddGoal={addGoalHandler}
                    onCancel={cancelAddModeHandler}
                    isVisible={isAddMode}
                />
                <FlatList
                    data={goals}
                    renderItem={(itemData) => (
                        <GoalItem
                            text={itemData.item.text}
                            // @ts-ignore
                            onPress={removeGoal.bind(this, itemData.item.key)}
                        />
                    )}
                />
            </SafeAreaView>
            <StatusBar style="auto"/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    safeArea: {
        margin: spacing.md
    },
})
