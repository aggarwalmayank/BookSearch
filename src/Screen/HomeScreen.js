import { View,  StatusBar, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../../src/Components/Searchbar';
// src\Components\Searchbar
const HomeScreen = ({ navigation }) => {



    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#b3b3ff"
            />
            <SearchBar  />

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