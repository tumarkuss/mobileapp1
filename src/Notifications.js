import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export default class Notifications extends Component {

    //Mapping applied here:
    state = {
        restaurants: [
            {
                name: 'Kowloon Bar',
                restaurantLogo: require('./img/Image1.png'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '20 min',
                id: 11
            },
            {
                name: 'Okko Bar',
                restaurantLogo: require('./img/Image2.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '33 min',
                id: 12
            },
            {
                name: 'Red Velvet Lounge',
                restaurantLogo: require('./img/Image3.jpg'),
                message: "Havent't seen you in a while. We have a special promotion for you tonight! ",
                timeElsapsed: '1h 2 min',
                id: 13
            },
            {
                name: 'Olivier Restaurant',
                restaurantLogo: require('./img/date3.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m., Friday. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '2h 35 min',
                id: 14
            },{
                name: 'Kowloon Bar',
                restaurantLogo: require('./img/Image1.png'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '1w 4 days',
                id: 15
            },
            {
                name: 'Okko Bar',
                restaurantLogo: require('./img/Image2.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '2 weeks',
                id: 16
            },
            {
                name: 'Red Velvet Lounge',
                restaurantLogo: require('./img/Image3.jpg'),
                message: "Havent't seen you in a while. We have a special promotion for you tonight! ",
                timeElsapsed: '3 weeks',
                id: 17

            },
            {
                name: 'Olivier Restaurant',
                restaurantLogo: require('./img/date3.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m., Friday. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '1 mon.',
                id: 18
            }
            
            
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
                            <Text style={styles.timeStamp}>
                                {restik.timeElsapsed}
                            </Text>
                        </View>
                        <View style={styles.messageBlock}>
                            <Text style={styles.message}adjustsFontSizeToFit={true}numberOfLines = { 1 } ellipsizeMode = 'middle'>
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
    //marginTop: 50,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
    //justifyContent: 'center',
  },
  scroll:{
    flexGrow:1,
    paddingBottom:200,
  },
  notificationBlock:{
    marginTop: 5,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    //backgroundColor: 'blue'
  },
  avatarBlock:{
      width: '15%',
      //backgroundColor: 'blue',
      flexDirection: 'column',

  },
  textBlock:{
      //backgroundColor: 'blue',
      flexDirection: 'column',
      width: '80%',
  },
  restaurantAvatar:{
        width: 40,
        height: 40,
        borderRadius: 20/ 2,
        marginLeft: 10
        
  },
  textTitle:{
        width: '80%',
        textAlign: 'left',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: "Avenir",
        marginLeft: 3,

  },timeStamp:{
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Avenir',
        //backgroundColor: 'blue',
  },
  textTop:{
      flexDirection: 'row',
      height: 17,
      //backgroundColor: 'blue',
  },
  message:{
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "Avenir",
    marginLeft: 5,
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
