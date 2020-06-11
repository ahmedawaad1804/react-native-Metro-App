import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
/* stations */
import stations from '../data/metro'
/* colors */
import colors from '../colors/colors'
export default class LineScreen extends React.Component {
    static navigationOptions =
        { headerTitle: 'Lines', headerTitleAlign: 'center' }




    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.touchableOpacityextension}

                    onPress={() => {
                        this.props.navigation.navigate('Stations',{line:'first'}) 
                    }}>
                    <View style={styles.viewextension1} >
                        <Text style={styles.textExtension}>First Line</Text>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacityextension}

                    onPress={() => {
                        this.props.navigation.navigate('Stations',{line:'second'}) 
                    }}>
                    <View style={styles.viewextension1} >
                        <Text style={styles.textExtension}>Second Line</Text>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacityextension}

                    onPress={() => {
                        this.props.navigation.navigate('Stations',{line:'third'}) 
                    }}>
                    <View style={styles.viewextension1} >
                        <Text style={styles.textExtension}>Third Line</Text>

                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,

        // paddingTop: StatusBar.currentHeight
    },
    touchableOpacity: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 7,
        padding: 15,

        borderRadius: 15,
        width: Dimensions.get('window').width * 9 / 10,
        


    }, touchableOpacityextension: {

        backgroundColor: '#fff',
        marginLeft:Dimensions.get('window').width * 0.5 / 10,
        marginTop:15,
        padding: 15,
        flexDirection: "row",
        borderRadius: 15,
        width: Dimensions.get('window').width * 9 / 10,
    },
    text: {
        color: colors.black,
        paddingLeft: 0,
        fontSize: 20
    }, textIcon: {
        color: colors.black,
        paddingLeft: 0,
        fontSize: 14
    }, textExtension: {
        color: colors.black,
        paddingLeft: 0,
        fontSize: 25
    }, textBig: {
        color: colors.black,
        paddingLeft: Dimensions.get('window').width * 2 / 10,
        fontSize: 20
    }, viewextension1: {

        flexDirection: 'row'
    }, viewextension2: {
        flex: 1,

        alignItems: "flex-end",
        flexDirection: 'row-reverse'
    }, viewextension3: {
        left: -Dimensions.get('window').width * 1 / 10,
    }, icon: {
        height: Dimensions.get('window').width * 1 / 10,
        width: Dimensions.get('window').width * 1 / 10,

    }, TouchableOpacityIcon: {
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 10

    }
});
