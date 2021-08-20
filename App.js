import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const lang = ["Español", "English", "Français", "中国人"]
// const [state, setState] = useState(initalState);

function LogInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={styles.texi}>
        <Text style={styles.txDo2}>Curp</Text>
        <TextInput placeholder='Curp' style={styles.txlog} /* onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email} */></TextInput>
      </View>

      <View style={styles.texPas}>
        <Text style={styles.txDo2}>Password</Text>
        <TextInput placeholder='Password' style={styles.txlog} /* onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email} */></TextInput>
      </View>

      <Button title="Sign In" style={styles.Button}
        onPress={() => navigation.navigate('Hola')}
      />

      <View style={styles.btnSepa}></View>

      <Button title="Sign Up" style={styles.Button}
        onPress={() => navigation.navigate('Sign Up')}
      />

    </View>
  );
}


/* const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    email: "",
    phone: "",
  };

  const handleChangeText = (value, curp) => {
    setState({ ...state, [curp]: value });
  };} */

  function SignUpScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <View style={styles.texi}>
          <Text style={styles.txDo2}>Curp</Text>
          <TextInput placeholder='Curp' style={styles.txlog}></TextInput>
        </View>

        <View style={styles.texPas}>
          <Text style={styles.txDo2}>Password</Text>
          <TextInput placeholder='Password' style={styles.txlog}></TextInput>
        </View>

        <Button title="Sign Up" style={styles.Button}
          onPress={() => navigation.navigate('Hola')}
        />
      </View>
    );
  }

  function HomeScreen({ navigation }) {
    return (
      <View>

        <View style={styles.texPadCurp}>
          <Text style={styles.txmain}>Curp</Text>
          <Text style={styles.texC}>HEMJ820709MMIRNS08</Text>
        </View>

        <View style={styles.txDosis}>
          <Text style={styles.txSepa}>Dose 1</Text>
          <Text style={styles.txDo2}>Dose 2</Text>
        </View>

      </View>
    );
  }

  const check = () => {
    const [isSelected, setSelection] = useState(false);
    return (
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </View>
      </View>
    );
  }

  function SettingsScreen({ navigation }) {
    return (
      <View style={{
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff',
        paddingTop: 40, paddingBotton: 80
      }}>
        <View style={styles.texPadLang}>
          <>
            <Text style={{ padding: 75, paddingBottom: 30, fontSize: 20 }}>Languaje</Text>
          </>
          <SelectDropdown style={{ paddingBottom: 50 }}
            data={lang}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
          />
        </View>
        <Button title="Delete Profile" style={{
          position: 'absolute', width: 300, height: 40,
          left: 58, top: 460,
        }}
          onPress={() => navigation.navigate('LogIn')}
        />
      </View>
    );
  }

  const HomeStack = createStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Hola" style={styles.txUpBar} component={HomeScreen} />
        <HomeStack.Screen name="LogIn" component={LogInScreen} />
        <HomeStack.Screen name="Sign Up" component={SignUpScreen} />
      </HomeStack.Navigator>
    );
  }

  const SettingsStack = createStackNavigator();

  function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      </SettingsStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  export default function App() {


    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-person-outline'
                  : 'ios-person-outline';
              } else if (route.name === 'Settings') {
                iconName = focused
                  ? 'cog-outline'
                  : 'cog-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'black',
          }}
        >
          <Tab.Screen name="Home" style={styles.view} component={HomeStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    txlog: {
      borderWidth: 2,
      borderRadius: 8,
      padding: 7,
    },
    txDosis: {
      borderTopWidth: 2,
      borderBottomWidth: 2,
      padding: 7,
    },
    txSepa: {
      borderBottomWidth: 1,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 11,
      paddingBottom: 19,
    },
    btnSepa: {
      paddingBottom: 16,
    },
    txDo2: {
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 12,
      paddingTop: 18.5,
    },
    texi: {
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 12,
    },
    texPas: {
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 12,
    },
    texPadCurp: {
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 260,
    },
    txUpBar: {
      color: '#ffffff'
    },
    texPadLang: {
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 180,
    },
    txmain: {
      fontSize: 30,
      paddingRight: 15,
      paddingBottom: 12,
    },
    texC: {
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderLeftWidth: 2,
      paddingBottom: 2,
      paddingRight: 10,
      paddingLeft: 10,
      paddingBottom: 2,
      paddingTop: 2,
      fontSize: 20,
      textAlign: 'center',
      borderRadius: 8,
      marginBottom: 10,
    },
    line: {
      width: 327,
      height: 0,
      left: 43,
      top: 438,
    },
    texLang: {
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderLeftWidth: 2,
      paddingBottom: 2,
      paddingRight: 40,
      paddingLeft: 40,
      paddingBottom: 2,
      paddingTop: 2,
      fontSize: 20,
      textAlign: 'center',
    },
    Button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 45,
      backgroundColor: '#323232',
      padding: 60,
    },
    usericon: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 4,
      position: 'absolute',
      width: 38.64,
      height: 38.32,
      left: 69,
      top: 838,
    },
  });
