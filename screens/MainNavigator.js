import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ImageBackground } from 'react-native';

export default class StationScreen extends React.Component {
    static navigationOptions =
    { header: null }
    render() {
        return (
            <View style={styles.container}>
               
                    <View style={styles.innerContainer}>
                        <Text style={styles.headerTitle}>Stations</Text>
                        <TouchableOpacity style={styles.button}
                            onPress={() => { this.props.navigation.navigate('LineScreen') }}>
                                <Image source={require("../assets/metro.jpg")}
                    style={styles.imagebg}>
                                
                                </Image>
                                <Text style={styles.innerText}>Know stations ...</Text>
                        </TouchableOpacity>
                      
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.headerTitle}>Nearest Station</Text>
                        <TouchableOpacity style={styles.button}
                            onPress={() => { this.props.navigation.navigate('NearestStationScreen') }}>
                                <Image source={require("../assets/man.jpg")}
                    style={styles.imagebg}>
                                
                                </Image>
                                <Text style={styles.innerText}>Get Fast !</Text>
                        </TouchableOpacity>
                      
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.headerTitle}>Tickets</Text>
                        <TouchableOpacity style={styles.button}
                            onPress={() => { this.props.navigation.navigate('NearestStationScreen') }}>
                                <Image source={require("../assets/ticket.jpg")}
                    style={styles.imagebg}>
                                
                                </Image>
                                <Text style={styles.innerText}>Calculate your ticket </Text>
                        </TouchableOpacity>
                      
                    </View>
              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
       paddingTop:30
    }, button: {
        
        backgroundColor: "#ccc",
        
        borderRadius: 20,
        width: Dimensions.get('window').width * 9 / 10,
        margin: 10,
        height: Dimensions.get('window').width * 4 / 10,
        marginLeft:Dimensions.get('window').width * 0.5 / 10,
    }, innerContainer: {
        
    },
    image: {
        width: Dimensions.get('window').width * 3.5 / 10,

        height: Dimensions.get('window').width * 3.5 / 10,
        borderRadius: 20,
        
    },imagebg: {
       
        // width:Dimensions.get('window').width ,
        // height: '100%',
        height: Dimensions.get('window').width * 4 / 10,
        width: Dimensions.get('window').width * 9 / 10,
        borderRadius: 10,
        position:'absolute'

        
    },headerTitle:{
        fontWeight:'bold'
        ,fontSize:30,
        paddingLeft:Dimensions.get('window').width * 0.5 / 10,
        color:'#fff'
    },innerText:{
        color:'#fff',
        fontWeight:'normal'
        ,fontSize:30,
        paddingTop:5,
        marginLeft:10
    }
});
