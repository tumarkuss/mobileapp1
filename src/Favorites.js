import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableHighlight } from 'react-native';
import SparkButton from 'react-native-sparkbutton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default class Favorites extends Component {

    updateLikeButton = ()=>{
        if (this.state.color == 'red'){
            this.setState({ 
                color: 'grey'
            })
    }   else{
            this.setState({
                color: 'red'
            })
    }
    }
    

    //Mapping applied here:
    state = {
        restaurants: [
            {
                name: 'Kowloon Bar',
                restaurantLogo: require('./img/Image1.png'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '20 min',
                color: 'red',
                id: 11
            },
            {
                name: 'Okko Bar',
                restaurantLogo: require('./img/Image2.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '33 min',
                color: 'red',
                id: 12

            },
            {
                name: 'Red Velvet Lounge',
                restaurantLogo: require('./img/Image3.jpg'),
                message: "Havent't seen you in a while. We have a special promotion for you tonight! ",
                timeElsapsed: '1h 2 min',
                color: 'red',
                id: 13,
            },
            {
                name: 'Olivier Restaurant',
                restaurantLogo: require('./img/date3.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m., Friday. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '2h 35 min',
                color: 'red',
                id: 14,
            },{
                name: 'Kowloon Bar',
                restaurantLogo: require('./img/Image1.png'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '1w 4 days',
                color: 'red',
                id: 15
            },
            {
                name: 'Okko Bar',
                restaurantLogo: require('./img/Image2.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '2 weeks',
                color: 'red',
                id: 16
            },
            {
                name: 'Red Velvet Lounge',
                restaurantLogo: require('./img/Image3.jpg'),
                message: "Havent't seen you in a while. We have a special promotion for you tonight! ",
                timeElsapsed: '3 weeks',
                color: 'red',
                id: 17
            },
            {
                name: 'Olivier Restaurant',
                restaurantLogo: require('./img/date3.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m., Friday. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '1 mon.',
                color: 'red',
                id: 18
            },
            
            
        ]
    }

  render() {
    return (

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
            {this.state.restaurants.map((restik) => (
                <View key = {restik.id} style = {styles.notificationBlock}>
                    <View style={styles.avatarBlock}>
                        
                        <View>
                            <Image 
                            source={restik.restaurantLogo} 
                            style={styles.restaurantAvatar} 
                            />
                        </View>
                        
                        
                    </View>
                    <View style={styles.textBlock}>
                        <View style={styles.textTop}>
                            <Text style={styles.textTitle}>
                                {restik.name}
                            </Text>

                            <TouchableHighlight
                                underlayColor="#DDDDDD"
                                onPress={() => {this.updateLikeButton()}}>
                                <View style={styles.timeStamp}>
                                    <MaterialCommunityIcons name="heart"size={25} color={this.state.color}  />
                                </View>
                                </TouchableHighlight>
                        </View>
                        <View style={styles.messageBlock}>
                            <Text style={styles.message}adjustsFontSizeToFit={true}>
                                {restik.message}
                            </Text>
                        </View>
                    </View>
                </View>
            ))}

            <View style={styles.lastMessage}>
                <Text>No more messages to display.</Text>
            </View>

            </ScrollView>


        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   marginTop: 0,
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'white'
  },
  scroll:{
    flexGrow:1,
    paddingBottom:200,
  },
  notificationBlock:{
    marginTop: 5,
    height: 100,
    width: '100%',
    flexDirection: 'row',
  },
  avatarBlock:{
      width: '25%',
      //backgroundColor: 'blue',
      flexDirection: 'column',

  },
  textBlock:{
      //backgroundColor: 'white',
      flexDirection: 'column',
      width: '75%',
  },
  restaurantAvatar:{
        width: 80,
        height: 80,
        borderRadius: 80/ 2,
        marginLeft: 10
        
  },
  textTitle:{
        width: '75%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: "Avenir",
        marginLeft: 15,

  },timeStamp:{
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Avenir',
  },
  textTop:{
      height: '40%',
      flexDirection: 'row',
      height: 25,
  },
  message:{
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "Avenir",
    marginHorizontal: 0,
  },
  messageBlock:{
    height: '70%',
    marginTop: 3,
  },
  lastMessage:{
      marginTop: 15,
      marginBottom: 20,
      alignItems: 'center',
      fontFamily: 'Avenir',
      fontSize: 20,
      
  }
});
