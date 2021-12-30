import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {colors} from "../utils/Colors";
import {spacing} from "../utils/Sizes";

const GoalItem = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: spacing.md,
        borderBottomColor: colors.sparator,
        borderBottomWidth: 1,
    },
    listItemText: {},
})

export default GoalItem