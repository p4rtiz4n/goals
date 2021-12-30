import React, {useState} from "react"
import {StyleSheet, Text, TextInput, TouchableHighlight, View, Modal, Button} from "react-native"
import {BlurView} from "expo-blur"
import {LinearGradient} from 'expo-linear-gradient'
import {font, spacing} from "../utils/Sizes"
import {colors} from "../utils/Colors"

const GoalInput = (props: any) => {

    const [inputGoal, setInputGoal] = useState('')

    const textChangeHandler = (text: string) => {
        setInputGoal(text)
    }
    const addGoalHandler = () => {
        props.onAddGoal(inputGoal)
        setInputGoal('')
    }

    return (
        <Modal visible={props.isVisible} animationType={'fade'} transparent={true}>
            <LinearGradient
                colors={[colors.bgStart, colors.bgMid, colors.bgEnd]}
                locations={[0.0, 0.5, 1.0]}
                style={styles.container}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <View style={styles.inputContainer}>
                    <BlurView style={styles.inputBlur}>
                        <TextInput
                            style={styles.input}
                            placeholder={"Input"}
                            onChangeText={textChangeHandler}
                        />
                    </BlurView>
                    <View style={styles.buttonsContainer}>
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor={colors.buttonUnderlay}
                            onPress={props.onCancel}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor={colors.buttonUnderlay}
                            onPress={addGoalHandler}
                        >
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </LinearGradient>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: spacing.md,
        width: '100%',
    },
    inputBlur: {
        borderRadius: spacing.sm,
        overflow: 'hidden',
        flexGrow: 1,
        width: '100%',
    },
    input: {
        fontSize: font.md,
        padding: spacing.sm,
        color: '#fff',
    },
    buttonsContainer: {
        marginTop: spacing.lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: colors.buttonBg,
        borderRadius: spacing.sm,
        padding: spacing.sm,
        paddingHorizontal: spacing.md,
        minWidth: '30%'
    },
    buttonText: {
        color: colors.text,
        textAlign: 'center',
    },
})