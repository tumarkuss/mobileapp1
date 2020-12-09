
import React from 'react';
import {  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
  
  import Swiper from 'react-native-swiper';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  //import StackNavigator from './StackNavigator'

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;




  // Data:
  // photos
  const Images=[
    { image: require("./img/Image1.png") },
    { image: require("./img/Image2.jpg") },
    { image: require("./img/Image3.jpg") },
    { image: require("./img/date1.jpg") },
    { image: require("./img/date2.jpg") },
    { image: require("./img/date3.jpg") },
  ];
  // Тут данные  для Swiper лучшие за месяц
  const ListsMapState ={
  materials: [
    {
      id:1,
      image:Images[0].image,
      press:('CardList'),
    },
    {
      id:2,
      image:Images[1].image,
      press:('CardList'),
    },
    {
      id:3,
      image:Images[2].image,
      press:('CardList'),
    },
  ]
}
// Swiper Data for "Dates":
const SvidanieMapState ={
  svidanies: [
    {
      id:4,
      image:Images[3].image,
    },
    {
      id:5,
      image:Images[4].image,
    },
    {
      id:6,
      image:Images[5].image,
    },
  ]
}
// Categories 
const initialMapState = {
  categories: [
    { 
      name: 'Fast Food', 
      icon: <MaterialCommunityIcons style={{marginRight:5}} color = '#000' name="food-fork-drink" size={18} />,
    },
    {
      name: 'Restaurants',
      icon: <Ionicons name="ios-restaurant" style={{marginRight:5}} color = '#000' size={18} />,
    },
    {
      name: 'Dates',
      icon: <Ionicons name="md-restaurant" style={{marginRight:5}}  color = '#000' size={18} />,
    },
    {
      name: 'Burgers',
      icon: <MaterialCommunityIcons name="food" style={{marginRight:5}} color = '#000' size={18} />,
    },
    {
      name: 'Hotel',
      icon: <Fontisto name="hotel" style={{marginRight:5}} color = '#000' size={15} />,
    },
],
};



export default function App({navigation}) {   
  const [state, setState] = React.useState(initialMapState);
  const [statee, setStatee] = React.useState(ListsMapState);
  const [stat, setStat] = React.useState(SvidanieMapState);
  return (
    <View style={styles.container}> 
    <ScrollView contentContainerStyle={styles.scroll}> 
    <View style={styles.searchBox}>
        <TextInput 
          style={{
            borderColor:"#000",
            color:"black",
            borderBottomColor:"#000",
            backgroundColor:'#fff',
            flex:1,
          }}
          placeholder="Search here"
          placeholderTextColor="black"
          autoCapitalize="none"
          />
        <Ionicons name="ios-search" color="black" size={20} style={{marginTop:3}}/>
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={60}
        style={styles.chipsScrollView}
        contentInset={{ // iOS only
          top:0,
          left:0,
          bottom:0,
          right:20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0
        }}
      >
 
        {state.categories.map((category,index) => (
          <TouchableOpacity key={index} style={styles.chipsItem}>
            {category.icon}
            <Text style={{color:'black'}}>{category.name}</Text>
          </TouchableOpacity>
        ))}

      </ScrollView>
      <View style={styles.sliderContainer}>
    <Swiper autoplay height={200} activeDotColor="hide" autoplayTimeout={5} showsPagination={false} > 
         {statee.materials.map((material) => (
        <TouchableOpacity key = {material.id} onPress={() => navigation.navigate('CardList')}style={{marginRight:1}}>
           <Image 
            source={material.image}
            resizeMode="cover"
            style={styles.sliderImage}
            />
        </TouchableOpacity>
      ))}
     </Swiper>
     </View>
      <View style={styles.month}>
        <Text style={styles.monthText}>This Months Best</Text>
        <Text style={styles.monthWatch} >Visited: 10 420</Text>
      </View>
      <View style={styles.sliderContainer}>
    <Swiper paginationStyle={{bottom:13}}
    autoplay={false} 
    height={200}
    showsPagination={true} 
    activeDotColor={'gray'} 
    dotColor={'white'}> 
        {stat.svidanies.map((svidanie) => (
        <TouchableOpacity key = {svidanie.id} onPress={() =>  alert('test')}>
           <Image 
            source={svidanie.image}
            resizeMode="cover"
            style={styles.sliderImage}
            />
        </TouchableOpacity>
      ))}
     </Swiper>
     </View>
     <View style={styles.month}>
        <Text style={styles.monthText}>Best places for Dates</Text>
        <Text style={styles.monthWatch} >Visited: 8 121</Text>
      </View>
      <View style={styles.sliderContainer}>
    <Swiper paginationStyle={{bottom:13}}
    autoplay={false} 
    height={200}
    showsPagination={true} 
    activeDotColor={'gray'} 
    dotColor={'white'} > 
        {stat.svidanies.map((svidanie) => (
        <TouchableOpacity key = {svidanie.id} onPress={() =>  alert('test')}>
           <Image 
            source={svidanie.image}
            resizeMode="cover"
            style={styles.sliderImage}
            />
        </TouchableOpacity>
      ))}
     </Swiper>
     </View>
          <View style={styles.month}>
        <Text style={styles.monthText}>Cozy Atmosphere!</Text>
        <Text style={styles.monthWatch} >Visited: 5 991</Text>
      </View>
      <View style={styles.sliderContainer}>
    <Swiper paginationStyle={{bottom:13}}
    autoplay={false} 
    height={200}
    showsPagination={true} 
    activeDotColor={'gray'} 
    dotColor={'white'} > 
        {stat.svidanies.map((svidanie) => (
        <TouchableOpacity key = {svidanie.id} onPress={() =>  alert('test')}>
           <Image 
            source={svidanie.image}
            resizeMode="cover"
            style={styles.sliderImage}
            />
        </TouchableOpacity>
      ))}
     </Swiper>
     </View>
          <View style={styles.month}>
        <Text style={styles.monthText}>Perfect Date</Text>
        <Text style={styles.monthWatch} >Visited: 8 121</Text>
      </View>
      </ScrollView>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor:'#FFFFFF',
  },
  scroll:{
    flexGrow:1,
    paddingBottom:200,
  },
  searchBox: {
    position:'absolute', 
    marginTop: 10,
    color:'white',
    flexDirection:"row",
    backgroundColor: 'white',
    width: '90%',
    alignSelf:'center',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#ccc',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position:'absolute',
    top:Platform.OS === 'ios' ? 90 : 80, 
    marginTop: 5,
    paddingHorizontal:10
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  month: {
    alignItems:'flex-start',
    marginLeft:30,
    marginTop:-2,
    top:150,
    marginBottom:5,
  },
  monthText:{
    fontSize:15,
    marginTop:2,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'black',
  },
  monthWatch: {
    fontSize:12,
    color:'gray',
    marginTop:2,
  },
  chipsIcon: {
    marginRight:5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'white', 
    marginTop:5,
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  sliderContainer: {
    height: 210,
    width: '90%',
    top: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 9,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
});
