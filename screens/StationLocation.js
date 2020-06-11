import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
/* stations */
import stations from '../data/metro'
/* colors */
import colors from '../colors/colors'
export default class StationLocation extends React.Component {
    static navigationOptions =
        { header: null }//to hide header perm

    state = {
        latitude: null,
        longitude:null
    }
    
    componentWillMount(){

        this.setState({latitude:this.props.navigation.getParam('StationObj').lat})
        this.setState({longitude:this.props.navigation.getParam('StationObj').long})
    }

    render() {
    if (!(this.state.latitude&& this.state.longitude)) { return (<Text>{this.props.navigation.getParam('StationObj').nameEN }</Text>) }
        else {

            return (

                //  <Text>sadf</Text>
                <MapView style={{ flex: 1 }}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}   >
                    <MapView.Marker coordinate={{latitude: this.state.latitude,longitude: this.state.longitude}} title={this.props.navigation.getParam('StationObj').nameEN}
                        pinColor="green" />

                </MapView>


            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.babyBlue,

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
        margin: 7,
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
