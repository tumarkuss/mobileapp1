import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import { Divider } from "react-native-elements";



export default class ProfilePage extends Component {
    render() {
    return (
      <View style={styles.container}>
       
        <View style = {styles.header}>
            <View style = {styles.avatar}>
                <Image 
                    source={require('./img/logo_.png')}  
                    style={styles.avatar} 
                />
            </View>
            <View>
                <Text style={styles.headerText}>Tumar Kussainov</Text>
            </View>

        </View>
    
        <View style={styles.titleName}>
            
            <View style={{marginLeft: 20, width: '80%'}}>
                <Text style={styles.groupTitle}>Information</Text>
            </View>
            <View>
                <TouchableHighlight
                    activeOpacity={0.6}
                    onPress={() => alert('Editing Profile Information')}>
                        <View style={styles.button}>
                            <Text style={{fontSize: 15, fontFamily:'Avenir', marginRight: 5, marginBottom: -8, }}>edit</Text>
                        </View>
                    
                </TouchableHighlight>
            </View>

        </View>
        <View style={styles.profileBlock}>
            <View style={styles.profileLines}>
                    <Text style={styles.line}>Name :</Text>
                    <Text style={styles.line}>Last Name :</Text>
                    <Text style={styles.line}>Age :</Text>
                    <Text style={styles.line}>Payment Preference :</Text>
                    <Text style={styles.line}>Reservation History :</Text>
                    <Text style={styles.line}>Activity Stats :</Text>
            </View>
            <View style={styles.profileButtons}>
                    <Text style={styles.profileButtons}>Tumar</Text>
                    <Text style={styles.profileButtons}>Kussainov</Text>
                    <Text style={styles.profileButtons}>21</Text>
                    <Text style={styles.profileButtons}>Credit Card ending: "1234"</Text>
                    <Text style={styles.profileButtons}>Upgrade to see</Text>
                    <Text style={styles.profileButtons}>Inactive subscription</Text>

            </View>

        </View>
            

        <View style ={styles.titleName}>
            <TouchableHighlight
                    activeOpacity={0.6}
                    onPress={() => alert('Membership history Page')}>
                        <View style={{marginLeft: 20, width: '1000%'}}>
                            <Text style={{fontSize:20,fontFamily: 'Avenir',}}>
                                Membership History
                                </Text>
                        </View>
                        
            </TouchableHighlight>
        </View>

        <View style ={styles.titleName}>
            <TouchableHighlight
                    activeOpacity={0.6}
                    onPress={() => alert('Personal Preferences Page')}>
                        <View style={{marginLeft: 20, width: '1000%'}}>
                            <Text style={{fontSize:20,fontFamily: 'Avenir',}}>
                                Your Preferences
                                </Text>
                        </View>
                        
            </TouchableHighlight>
        </View>

        <View style ={styles.titleName}>
            <TouchableHighlight
                    activeOpacity={0.6}
                    onPress={() => alert('Privacy Page')}>
                        <View style={{marginLeft: 20, width: '1000%'}}>
                            <Text style={{fontSize:20,fontFamily: 'Avenir',}}>
                                Privacy
                                </Text>
                        </View>
                        
            </TouchableHighlight>
        </View>

        <View style ={styles.titleName}>
            <TouchableHighlight
                    activeOpacity={0.6}
                    onPress={() => alert('Notifications settings Page')}>
                        <View style={{marginLeft: 20, width: '1000%'}}>
                            <Text style={{fontSize:20,fontFamily: 'Avenir',}}>
                                Notifications
                                </Text>
                        </View>
                        
            </TouchableHighlight>
        </View>

        <View style ={styles.titleName}>
            <TouchableHighlight
                    activeOpacity={0.6}
                    onPress={() => alert('Terms and Conditions Page')}>
                        <View style={{marginLeft: 20, width: '1000%'}}>
                            <Text style={{fontSize:20,fontFamily: 'Avenir',}}>
                                Terms and Conditions
                                </Text>
                        </View>
                        
            </TouchableHighlight>
        </View>

        <View style ={styles.titleName}>
            <TouchableHighlight
                    activeOpacity={0.6}
                    onPress={() => alert('Help Page')}>
                        <View style={{marginLeft: 20, width: '1000%'}}>
                            <Text style={{fontSize:20,fontFamily: 'Avenir',}}>
                                Help
                                </Text>
                        </View>
                        
            </TouchableHighlight>
        </View>

        <View style ={styles.titleName}>
            <TouchableHighlight
                    activeOpacity={0.6}
                    onPress={() => alert('Contact Us and resources Page')}>
                        <View style={{marginLeft: 20, width: '100%'}}>
                            <Text style={{fontSize:20,fontFamily: 'Avenir',}}>
                                Contact Us
                                </Text>
                        </View>
                        
            </TouchableHighlight>
        </View>

        <View style={styles.logOutButton}>
            <TouchableHighlight
                    activeOpacity={0.6}
                    onPress={() => alert('TAKES USER TO LOG IN PAGE and deleted Cache')}>
                        <View>
                            <Text style={{fontSize:20,fontFamily: 'Avenir',}}>
                                Log Out
                            </Text>
                        </View>
                        
            </TouchableHighlight>
        </View>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    //justifyContent: 'flex-start',
    marginTop: 55,
    backgroundColor: 'white',
  },
  header: {
    borderWidth: 2,
    borderColor: 'grey',
    height: 100,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 0,
    backgroundColor: 'white',
    alignItems: 'center',

  },
  avatar:{
    width: 80,
    height: 80,
    borderRadius: 80/ 2,
    marginLeft: 10
        
  },
  headerText:{
    fontSize: 30,
    fontFamily: 'Avenir',
    marginLeft: 30,
  },
  
  titleName:{
      backgroundColor: 'white',
      width: '100%',
      height: 30,
      flexDirection: 'row',
      alignItems: 'center',
  },
  profileBlock:{
      borderWidth: 2,
      borderColor: 'grey',
      width: '100%',
      fontSize: 30,
      flexDirection: 'row',
  },
  profileLines:{
    alignItems: 'flex-start',
    marginLeft: 10,
    width: '40%',

  },
  profileButtons:{
    fontSize:15,
    fontFamily: 'Avenir',

  },
  line:{
      fontSize:15,
      fontFamily: 'Avenir',

  },
  groupTitle:{
      fontFamily: 'Arial',
      fontSize: 20,
      marginLeft: 5,
      alignItems: 'center',
      width: '80%',
  },
  logOutButton:{
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: '40%',
    height: 50,
    marginTop: 50,
    borderWidth:2,
    marginLeft: '30%'



  }
});
