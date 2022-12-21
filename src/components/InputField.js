import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputField = (props) => {
    const {
        label,
        leftIcon,
        rightIcon,
        containerStyle,
        inputStyle,
        keyboardType,
        autoCapitalize,
        autoCorrect,
        secureTextEntry,
        placeholder,
        value,
        onChangeText,
        ...rest
    } = props;

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.innerContainer}>
                {label && <Text style={styles.label}>{label}</Text>}
                <View style={styles.inputContainer}>
                    {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
                    <TextInput
                        style={[styles.input, inputStyle]}
                        selectionColor="#4B5563"
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        autoCapitalize={autoCapitalize}
                        autoCorrect={autoCorrect}
                        secureTextEntry={secureTextEntry}
                        value={value}
                        onChangeText={onChangeText}
                        {...rest}
                    />
                </View>
            </View>
            {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </View>
    )
}

export default InputField;

const styles = StyleSheet.create({
    container: {
        borderColor: '#E5E7EB',
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingTop: 6,
        paddingBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 4,
    },
    label: {
        fontSize: 12,
        color: "#6B7280",
    },
    input: {
        fontSize: 16,
        color: "#1F2937",
        flex: 1,
        padding: 0,
    },
    leftIcon: {
        marginRight: 8,
    },
    rightIcon: {
        marginRight: -10,
        padding: 10,
    },
})