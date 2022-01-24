import { View, TextInput, Alert, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';


import * as string from '../../src/Resources/string';
import * as booksAPI from '../../src/API/BooksAPI';
// E:\react native\BookSearch\src\API\BooksAPI.js
const SearchBar = (props) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        getBooks();
    }, [getBooks, input]);

    const getBooks = async () => {
        try {
            const responseJson = await booksAPI.getAllEbooks(input);
            if (responseJson.items !== undefined) {
                const volumeItem = setItemsVolumeInfo(responseJson.items);
                props.callBackSearchResult(volumeItem);
            } else {
                props.callBackSearchResult([]);
                console.log(string.API_ERROR);
            }
        } catch (error) {
            console.log(error);
            Alert.alert(error.toString());
        }
    };
    const setItemsVolumeInfo = allItems => {
        return allItems.map(itemInfo => {
            return itemInfo.volumeInfo;
        });
    };

    const onSearchStoreItems = textInput => {
        setInput(textInput);
    };

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                value={input}
                placeholderTextColor="gray"
                autoCapitalize="none"
                onChangeText={onSearchStoreItems}
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