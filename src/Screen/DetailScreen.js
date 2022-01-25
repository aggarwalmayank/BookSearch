import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Linking, Alert, ScrollView } from 'react-native';
import * as string from '../../src/Resources/string';
const DetailScreen = ({ route, navigation }) => {
    console.log("mayank")
    console.log(route.params.item.title)
    const { title, authors, pageCount, previewLink, imageLinks, description, publisher } = route.params.item;

    const onOpenLinkToRead = () => {
        Linking.canOpenURL(previewLink).then(supported => {
            if (supported) {
                Linking.openURL(previewLink);
            } else {
                Alert.Alert(
                    "Don't know how to open " +
                    previewLink +
                    ". Maybe browser don't support",
                );
            }
        });
    };

    return (
        <ScrollView>
            <View style={styles.storeItem}>
                <View >
                    <Image
                        style={styles.imageNewFeed}
                        source={
                            imageLinks !== undefined
                                ? { uri: imageLinks.thumbnail }
                                : require('../../src/Resources/assets/chooseimage.jpg')
                        }
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.columnFlex}>
                    <Text style={styles.textview}>Title: {title}</Text>
                    <Text style={styles.textview}>Author: {authors !== undefined || authors > 0 ? authors : string.NO_INFO}</Text>
                    <Text style={styles.textview}>Page: {pageCount !== undefined ? pageCount : string.NO_INFO}</Text>
                    <TouchableOpacity
                        style={styles.btnAccept}
                        onPress={onOpenLinkToRead}>
                        <Text style={styles.textStyle}>Know More</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.centeredView}>
                Description: {description !== undefined ? description : string.NO_INFO}
            </Text>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    storeItem: {
        flexDirection: 'row',
    },
    columnFlex: {
        flexDirection: 'column',
        
        marginLeft: 10,
        flex: 1,
    },textview: {
        textAlign: 'left',
        fontSize: 15,
        marginTop: 20,
        fontWeight: 'bold',
      },
      btnAccept: {
        width: '50%',
        justifyContent: 'center',
        height: 35,
        marginTop: 10,
        backgroundColor: '#661aff',
        alignItems: 'center',
        borderRadius: 25,
      },
    centeredView: {
        margin: 8,
        textAlign:"justify"
    },
    imageNewFeed: {
        width: 130,
        height: 150,
        marginTop: 15,
        marginLeft: 15,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DetailScreen;
