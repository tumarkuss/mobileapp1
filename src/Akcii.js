import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Akcii extends Component {
    render() {
        return (
          <View style={{flex:1}}>
          <View style={{height:130, width:93,padding:2}}>
          <Image 
            source={this.props.imageUri}
            style={styles.sliderImage}
          />
          </View>
          </View>
        );
    }
}
export default Akcii;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderImage: {
      height:'100%',
      resizeMode:'cover',
      width:'100%',
      borderRadius: 12,
    }
});