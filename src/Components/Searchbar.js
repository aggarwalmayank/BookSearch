import { View, TextInput, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
    const [input, setInput] = useState('');

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                value={input}
                placeholderTextColor="gray"
                autoCapitalize="none"
                autoCorrect={false} />
        </View>

    );
}

const styles = StyleSheet.create({

    iconStyle: {
        marginHorizontal: 10,
        fontSize: 25,
        alignSelf: 'center'
    },
    backgroundStyle: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#e6e6ff',
        borderRadius: 10,
        height: 50,
        marginBottom: 5,
        marginHorizontal: 8

    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
});
export default SearchBar;