import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
/* stations */
import stations from '../data/metro'
/* colors */
import colors from '../colors/colors'
export default class StationScreen extends React.Component {
  static navigationOptions =
    { headerTitle: 'Stations', headerTitleAlign: 'center' }


  state = {
    itemPressed: null
  }

  _changePressedItem(value) {
    if (value === this.state.itemPressed) {
      this.setState({ itemPressed: null })

    } else {
      this.setState({ itemPressed: value })
    }
  }


  render() {
    return (
      <View style={styles.container}>

        <ScrollView>
          {
            stations.filter(station => station.line === this.props.navigation.getParam('line')).map((station, key) => (
              this.state.itemPressed === key
                ? <View>
                  <TouchableOpacity style={styles.touchableOpacityextension}

                    onPress={() => {
                      //  this.props.navigation.navigate('stationDetails', { name: station.line })
                      this._changePressedItem(key)
                    }}>
                    <View style={styles.viewextension1} >
                      <Text style={styles.textExtension}>{station.nameEN}</Text>

                      {/* <View style={styles.viewextension3} >
                        <TouchableOpacity onPress={()=>{console.log("dd") }}>
                        <Image source={require("../assets/info2.png")}
                          style={styles.icon}></Image>
                          <Text style={styles.text}>Info</Text>
                        </TouchableOpacity>
                        
                      </View> */}
                    </View>
                    <View style={styles.viewextension2} >
                      <TouchableOpacity style={styles.TouchableOpacityIcon} onPress={() => { this.props.navigation.navigate('StationLocation', { StationObj: station }) }}>
                        <Image source={require("../assets/marker.png")}
                          style={styles.icon}></Image>
                        <Text style={styles.textIcon}>Location</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.TouchableOpacityIcon} onPress={() => { console.log("cc") }}>
                        <Image source={require("../assets/info2.png")}
                          style={styles.icon}></Image>
                        <Text style={styles.textIcon}>Info</Text>
                      </TouchableOpacity>

                    </View>
                  </TouchableOpacity>

                </View>
                :
                <View>
                  <TouchableOpacity style={styles.touchableOpacity}
                    onPress={() => {
                      //  this.props.navigation.navigate('stationDetails', { name: station.line })
                      this._changePressedItem(key)
                    }}>

                    <Text style={styles.text}>{station.nameEN}</Text>



                  </TouchableOpacity>

                </View>


            ))
          }
        </ScrollView>
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
    marginLeft: Dimensions.get('window').width * 0.5 / 10,
    marginTop: 12,
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
