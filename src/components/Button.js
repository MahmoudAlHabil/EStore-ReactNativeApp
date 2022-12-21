import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
    const {
        onPress,
        title,
        icon,
        buttonStyle,
        titleStyle,
        iconStyle,
        disabled,
        ...rest
    } = props

    return (
        <TouchableOpacity
            disabled={disabled}
            {...rest}
            onPress={onPress}
            style={[styles.button, buttonStyle]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        height: 48,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00E1B4',
    },
    title: {
        fontSize: 18,
        color: "#111827",
    },
})