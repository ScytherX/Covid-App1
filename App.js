import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen() {
  const [gifs, setGifs] = useState('');
  const rand = async () => {
    const API_KEY = '65jZnv6AH1NT4prsWeg7msk7OYuBhxHO';
    try {
      const Rand_URL = 'http://api.giphy.com/v1/gifs/random';
      const resJson = await fetch(`${Rand_URL}?api_key=${API_KEY}&limit=1`);
      const res = await resJson.json();
      setGifs(res.data.images.downsized_medium.url);
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(() => {
    rand()
  }, [])
  const handleClick = () => {
    rand()
  }
  return (
    <View style={styles.view}>

      <Image
        resizeMode='contain'
        style={styles.image}
        source={{ uri: gifs }}
      />

      <Button onPress={handleClick} title="New Random Gif" />
    </View>
  );
}


function SettingsScreen() {
  const [gifs, setGifs] = useState("");
  const [term, updateTerm] = useState('Dogs');
  useEffect(() => {
    fetchGifs()
  }, [])
  const fetchGifs = async () => {
    const API_KEY = '65jZnv6AH1NT4prsWeg7msk7OYuBhxHO';
    try {
      const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
      const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}&limit=1`);
      const res = await resJson.json();
      setGifs(res.data[0].images.downsized_medium.url);
    } catch (error) {
      console.warn(error);
    }
  }
  function onEdit(newTerm) {
    updateTerm(newTerm);
  }
  function handleClick() {
    fetchGifs();
  }

  return (
    <View style={styles.view}>
     
     <Image
        resizeMode='contain'
        style={styles.image}
        source={{ uri: gifs }}
      />

        
      <TextInput
        placeholder="Dogs"
        placeholderTextColor='#fff'
        style={styles.textInput}
        onChangeText={(text) => onEdit(text)}
      />
      <Button onPress={handleClick} title="Search Gif" />
    </View>
  );
}


const flat = () => {
  <TextInput
    placeholder="Dogs"
    placeholderTextColor='#fff'
    style={styles.textInput}
    onChangeText={(text) => onEdit(text)}
  />
  return (
    <View style={styles.view}>
      <FlatList style={styles.FlatList}
        data={gifs}
        renderItem={({ item }) => (
          <Image
            resizeMode='contain'
            style={styles.image}
            source={{ uri: item.images.original.url }}
          />
        )}
      />
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity style={{ alignItems: 'center', alignSelf: 'center' }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Random Gif" component={HomeScreen} />
        <Tab.Screen name="Search Gif" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black'
  },
  textInput: {
    width: '100%',
    height: 50,
    color: 'white'
  },
  image: {
    width: 300,
    height: 150,
    borderWidth: 3,
    marginBottom: 5
  },
  Button: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'black'
  }
});
