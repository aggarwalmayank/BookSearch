import {Image, View, StyleSheet, Text,} from 'react-native';
import React from 'react';
import * as string from '../../src/Resources/string';

const BookCard = ({ item }) => {
    // console.log(item)
    return (
        <View style={styles.storeItem}>
            <View >
                <Image
                    style={styles.imageNewFeed}
                    source={
                        item.imageLinks !== undefined
                            ? { uri: item.imageLinks.thumbnail }
                            : require('../../src/Resources/assets/chooseimage.jpg')
                    }
                    resizeMode="contain"
                />
            </View>
            <View style={styles.columnFlex}>
                <Text style={styles.textview}>Title: {item.title}</Text>
                <Text style={styles.textview}>Author: {item.authors !== undefined || item.authors > 0 ? item.authors : string.NO_INFO}</Text>
               
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   
    storeItem: {
        borderRadius: 15,
        flexDirection: 'row',
        margin: 5,
        backgroundColor: '#fff',
        elevation: 8,
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    columnFlex: {
        flexDirection: 'column',
        flex: 1,
        
        marginLeft: 10,
    },
    imageNewFeed: {
        width: 150,
        height: 150,
        margin: 15,
    },
    textview: {
        textAlign: 'left',
        fontSize: 15,
        marginTop: 20,
        fontWeight: 'bold',
      }

});
export default BookCard;