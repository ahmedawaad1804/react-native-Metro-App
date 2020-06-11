import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ImageBackground } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { getDistance, getPreciseDistance } from 'geolib';
/* stations */
import stations from '../data/metro'

export default class NearestStationScreen extends React.Component {
    static navigationOptions =
    { header: null }

    state = {
        location: null,
        distance:null
    }
    getLocationAsync = async () => {
        let status = await Permissions.askAsync(Permissions.LOCATION)
        // console.log(status);
        let location = await Location.getCurrentPositionAsync({})
        // console.log(location);
        this.setState({location})



    }

  
    calculateDistance=(lat,long)=>{
        
        var dis = getDistance(
            { latitude: lat, longitude: long },
            { latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude }
          );
       return dis/1000
    }

    componentDidMount() {
        this.getLocationAsync()
       
    }


    render() {
        if(!this.state.location){return(<View/>)}
else{
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                <Text>Your nearest station is :</Text>
                </View>
                
                <MapView style={styles.mapStyle} 
            initialRegion={{
                latitude :this.state.location.coords.latitude,
                longitude :this.state.location.coords.longitude,
                latitudeDelta:0.0922,
                longitudeDelta:0.0421
            }}   >
            <MapView.Marker coordinate={this.state.location.coords} title="you are here !" 
            pinColor="green"/>

        </MapView>
      
                
            </View>
        );}
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       paddingTop:30,
       alignItems:'center',
    //    flexDirection:'column-reverse'
       width: Dimensions.get('window').width,
       height: Dimensions.get('window').height
       
      
    },innerContainer:{
        flex:1,
        height:Dimensions.get('window').height*2/10,
        width: Dimensions.get('window').width,
      
        justifyContent:'center',
        alignItems:'center',
        
    },mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*8/10,
        
      },
        
     
});
