import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from 'recoil';
import FavouritesProvider from './src/context/FavouritesProvider';
import Navigation from "./src/navigation"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    DriodSans: require("./assets/fonts/DroidSans.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <GestureHandlerRootView>
      <NavigationContainer
        theme={{
          colors: {
            background: "#121212",
          },
        }}
      >
        <RecoilRoot>
          <FavouritesProvider>
            <View style={styles.container}>
              <Navigation />
              <StatusBar style="light" />
            </View>
          </FavouritesProvider>        
        </RecoilRoot>
      </NavigationContainer>
    </GestureHandlerRootView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
  text: {
    color: 'white', // Setting the text color to white
  }
});
