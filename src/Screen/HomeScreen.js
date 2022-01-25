import { View, StatusBar, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../../src/Components/Searchbar';
import BookCard from '../../src/Components/BookCard';

const HomeScreen = ({ navigation }) => {
    const [searchResult, setSearchResult] = useState([]);




    const getSearchItemResult = (searchItems) => {
        setSearchResult(searchItems);
    };
    const renderItems = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                    <BookCard item={item} />
                </TouchableOpacity>
            </>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#b3b3ff"
            />
            <SearchBar callBackSearchResult={getSearchItemResult} />
            <FlatList
                data={
                    !(searchResult === undefined || searchResult.length === 0)
                        ? searchResult : []
                }
                keyboardShouldPersistTaps="handled"
                renderItem={renderItems}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
});

export default HomeScreen;