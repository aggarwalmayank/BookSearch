import { View, StatusBar, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../../src/Components/Searchbar';
const HomeScreen = ({ navigation }) => {
    const [searchResult, setSearchResult] = useState([]);




    const getSearchItemResult = (searchItems) => {
        setSearchResult(searchItems);
    };


    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#b3b3ff"
            />
            <SearchBar callBackSearchResult={getSearchItemResult} />

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