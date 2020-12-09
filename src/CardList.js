import React from "react";
import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    StatusBar,
    Image,
    TouchableOpacity
  } from "react-native";
import Swiper from 'react-native-swiper';
import HeaderImageScrollView, {TriggeringView} from 'react-native-image-header-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Akcii from './Akcii';

// Список для информации о заведении
const typeMapState = {
  types: [
    { 
      name: 'Меню', 
      icon: <Ionicons name="ios-restaurant" size={26} color="#000" />,
    },
    {
      name: 'График',
      icon:  <Ionicons name="ios-time" size={26} color="#000" />,
    },
    {
      name: 'Плейлист',
      icon: <MaterialCommunityIcons name="music" size={26} color="#000" />,
    },
    {
      name: 'Бар',
      icon: <MaterialCommunityIcons name="glass-cocktail" size={26} color="#000" />,
    },
    {
      name: 'Избранное',
      icon: <MaterialCommunityIcons name="star-outline" size={26} color="#000"  />,
    },
],
};

const MIN_HEIGHT = Platform.OS === 'android' ? 120 : 15;
const MAX_HEIGHT = 326;
  

  const CardList = () => {
    const [state, setState] = React.useState(typeMapState);
    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-contents'/>
            <HeaderImageScrollView 
                 maxHeight={MAX_HEIGHT}
                 minHeight={MIN_HEIGHT}
                 maxOverlayOpacity={0.7}
                 minOverlayOpacity={0.1}
                 renderHeader={() => (
                        <ImageBackground source={require('./img/Image1.png')} style={styles.image}>
                      <View style={{flexDirection:'row', alignItems:'flex-end',fontWeight: 'bold',
                            color: 'white',
                            position: 'absolute', 
                            bottom: 0, 
                            right: 0}}>
                            <Text style={{color:'white',marginHorizontal:2}}>5</Text>
                            <FontAwesome name='star' size={18} color='#ff1616'/>
                            <Text style={{color:'white'}}>(8 020)</Text>
                        </View>
                        </ImageBackground>
                        
                        )}>
                <TriggeringView style={styles.sectiontlt}>
                    <View style={{alignSelf:'center'}}>
                        <Text style={styles.titleSign}>Kowloon</Text>
                    </View>
                </TriggeringView>

                <View style={styles.categoryContainer}> 
                {state.types.map((type, index) => (
                <TouchableOpacity key={index}
                  style={styles.categoryBtn}
                  onPress={() =>
                    alert('test1')}>
                  <View style={styles.categoryIcon}>
                    {type.icon} 
                  </View>
                  <Text style={styles.categoryBtnTxt}>{type.name}</Text>
                </TouchableOpacity>
                ))}
                </View>
                <View style={{height:160,marginTop:-3,marginBottom:-7}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                 <Akcii 
                    imageUri=
                    {require('./img/k1.jpg')}/>
                 <Akcii 
                     imageUri=
                  {require('./img/k2.jpg')}/>
                <Akcii 
                    imageUri=
                    {require('./img/k1.jpg')}/>
                <Akcii 
                     imageUri=
                  {require('./img/k1.jpg')}/>
                <Akcii 
                    imageUri=
                    {require('./img/k2.jpg')}/>
                 <Akcii 
                     imageUri=
                  {require('./img/k1.jpg')}/>
                    
                </ScrollView>
                </View>
                
                <View style={styles.section}> 
                     <Text style={styles.sectionContent}>    Популярный бар среди, молодёжи, здесь вы увидите всех своих знакомых и найдёте себе приключения</Text> 
                          <Text style={styles.sectionContent}>  Теперь он известен как центр торговли, искусства и развлечений. 
                       У любителей шопинга пользуются популярностью.
                        </Text>
                </View>
                <View>
                <Text style={{position:'absolute', left:0, top:0,marginBottom:10,marginLeft:10,fontSize:16,color:'gray'}}>Фотографии</Text>
                </View>
                <View style={styles.gallery}>  
                <Image  source={require('./img/Image1.png')}
                style={styles.listImage}/>
                <Image  source={require('./img/Image1.png')}
                style={styles.listImage}/>
                <Image  source={require('./img/Image1.png')}
                style={styles.listImage}/>
                <Image  source={require('./img/Image1.png')}
                style={styles.listImage}/>
                </View>
                <View style={styles.button}>
                <TouchableOpacity 
                onPress ={() => {}}
                  style={[styles.order, {
                    borderColor: '#000',
                    borderWidth: 1
                  }]}
                >
                  <Text style={[styles.textSign, {
                    color: '#000'
                  }]}>Order Now</Text>

                </TouchableOpacity>
                </View>
            </HeaderImageScrollView>
        </View>
    );
  };

  export default CardList;

  const styles = StyleSheet.create({
      container: {
          flex:1,
          
      },
      categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop:3,
        marginBottom:20,
      },
      gallery:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
        marginTop:20,
      },
      titleSign:{
        marginTop:-2,
        fontSize:25,
        alignSelf:'center',
        fontFamily:'sans-serif',
        fontWeight:'normal',
        width:'100%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width:-1, height: 3},
        textShadowRadius: 10,
        textTransform:'uppercase',
        color:'#000',
      },
      image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
      },
      listImage:{
        height: 105,
        width: 95,
        position: 'relative', // because it's parent
        top: 7,
        marginBottom:20,
        left: 5,
      },
      categoryIcon: {
        alignItems: 'center',
        justifyContent:'center',
        alignSelf: 'center',
      },
      categoryBtnTxt: {
        marginTop:0,
        fontSize:12,
        alignSelf:'center',
        color: '#000',
      },
      section: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3',
      },
      sectiontlt: {
        padding: 12,
        borderBottomWidth: 0,
        borderBottomColor: '#f3f3f3',
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      sectionContent: {
        fontSize: 16,
        marginTop:10,
        textAlign:'justify',
        color:'#000',
      },
      order: {
        width: '80%',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    button: {
      marginTop:10,
      alignItems: 'center'
    },
    textSign: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  categoryBtn: {
    flex: 1,
    width: '26%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
    });