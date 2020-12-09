
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
  // Списки с данными
  // тут фотки
  
// Тут данные  для Swiper места для свидании

// список с категориями 
const Images=[
  { image: require("./img/Image1.png") },
  { image: require("./img/Image2.jpg") },
  { image: require("./img/Image3.jpg") },
  { image: require("./img/date1.jpg") },
  { image: require("./img/date2.jpg") },
  { image: require("./img/date3.jpg") },
];
// Тут данные  для Swiper лучшие за месяц
export const ListsMapState ={
materials: [
  {
    id:1,
    image:Images[0].image,
    name:('CardList'),
  },
  {
    id:2,
    image:Images[1].image,
    name:('CardTwo'),
  },
  {
    id:3,
    image:Images[2].image,
    name:('CardList'),
  },
],
svidanies: [
  {
    id:4,
    image:Images[1].image,
  },
  {
    id:5,
    image:Images[4].image,
  },
  {
    id:6,
    image:Images[5].image,
  },
],
categories: [
  { 
    name: 'Перекусить', 
    icon: <MaterialCommunityIcons style={{marginRight:5}} color = '#000' name="food-fork-drink" size={18} />,
  },
  {
    name: 'Рестораны',
    icon: <Ionicons name="ios-restaurant" style={{marginRight:5}} color = '#000' size={18} />,
  },
  {
    name: 'Свидания',
    icon: <Ionicons name="md-restaurant" style={{marginRight:5}}  color = '#000' size={18} />,
  },
  {
    name: 'Бургерные',
    icon: <MaterialCommunityIcons name="food" style={{marginRight:5}} color = '#000' size={18} />,
  },
  {
    name: 'Hotel',
    icon: <Fontisto name="hotel" style={{marginRight:5}} color = '#000' size={15} />,
  },
]
}