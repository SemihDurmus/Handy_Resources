// installation.js

// #### YARN INSTALL ####
{
	$npm install -g yarn
}


// #### PROJECT DESIGN ####
{
	- src
    > commons
      - functions.js
      - styles.js
      - ...
    > pages
      > main
        > components
          - Filter.js
        > utils
          - functions.js
          - styles.js
        - Main.js
      > list
        -... 
      > details
        - ...
    - context
    - utils
}

// #### REACT NATIVE ####
{
	// #### Create & Open Project  ####
	{
		$npx react-native init myFirstProject // create cli-react-native project
   		$npx create-react-app my-app  // create react app
   		$expo react-native init myFirstProject // create EXPO-react project

		$cd myFirstProject // proje klasörüne geçiş

		$code . // vs code da projemizi açmak için

		$npx react-native start && npx react-native run-android

		$npx react-native start // open react-native web page 
		$npm start // open web page

		$npx react-native run-android // hazır projeleri açmak için bu yeterli
		$npx react-native run-ios
	}

	// #### NPM UPDATE  ####
	{
		$npm install -g npm@latest  // npm güncelleme
	}

	// #### Aktif Cihazları Görme ####
	{
		$adb devices // aktif cihazları görüntüleme	
	}

	// #### NAVIGATION-STACK INSTALL ####
	{
		$npm install @react-navigation/stack
		$npm install @react-navigation/native
		$npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

		// Proje ana sayfasında en üste ekle!
		import 'react-native-gesture-handler';

	}

	// #### TAB(BOTTOM) NAVIGATION INSTALL ####
	{
		https://reactnavigation.org/docs/tab-based-navigation

		$yarn add @react-navigation/bottom-tabs
		$npm install @react-navigation/bottom-tabs

		// Proje ana sayfasında en üste ekle!
		import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

		{
			export default function App() {
			  return (
			    <NavigationContainer>
			      <Tab.Navigator
			        screenOptions={({ route }) => ({
			          tabBarIcon: ({ focused, color, size }) => {
			            let iconName;

			            if (route.name === 'Home') {
			              iconName = focused
			                ? 'ios-information-circle'
			                : 'ios-information-circle-outline';
			            } else if (route.name === 'Settings') {
			              iconName = focused ? 'ios-list-box' : 'ios-list';
			            }

			            // You can return any component that you like here!
			            return <Ionicons name={iconName} size={size} color={color} />;
			          },
			        })}
			        tabBarOptions={{
			          activeTintColor: 'tomato',
			          inactiveTintColor: 'gray',
			        }}
			      >
			        <Tab.Screen name="Home" component={HomeScreen} />
			        <Tab.Screen name="Settings" component={SettingsScreen} />
			      </Tab.Navigator>
			    </NavigationContainer>
			  );
			}
		}
	}

	// #### GRADLEW CLEAN ####
	{
		$cd android && gradlew clean && cd ..  // paket kurulumunda hata alınması halinde önceki paketleri temizler siler
	}

	// #### AXIOS INSTALL ####
	{
		$npm install axios
		$yarn add axios

		const axios = require('axios').default;
		const axios = require('axios');
		{
			// Make a request for a user with a given ID
			axios.get('/user?ID=12345')
			  .then(function (response) {
			    // handle success
			    console.log(response);
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });

			// Optionally the request above could also be done as
			axios.get('/user', {
			    params: {
			      ID: 12345
			    }
			  })
			  .then(function (response) {
			    console.log(response);
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });  

			// Want to use async/await? Add the `async` keyword to your outer function/method.
			async function getUser() {
			  try {
			    const response = await axios.get('/user?ID=12345');
			    console.log(response);
			  } catch (error) {
			    console.error(error);
			  }
			}
					}
	}

	// #### REDUX INSTALL ####
	{
		NPM
		$npm install @reduxjs/toolkit

		Yarn
		$yarn add @reduxjs/toolkit

		Redux Core
		To install the stable version:

		NPM
		$npm install redux

		Yarn
		$yarn add redux

		$yarn add redux react-redux
	}

	// #### REACT NATIVE VECTOR ICONS INSTALL ####
	{
		https://github.com/oblador/react-native-vector-icons
		https://oblador.github.io/react-native-vector-icons/

		$npm install --save react-native-vector-icons
		$yarn add react-native-vector-icons

		Icon Component
		You can either use one of the bundled icons above or roll your own custom font.

		{
			import Icon from 'react-native-vector-icons/FontAwesome';
			
			const myIcon = <Icon name="rocket" size={30} color="#900" />;
		}
		
		// Android
		{
			Option: With Gradle (recommended)
			This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

			Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

			apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
			To customize the files being copied, add the following instead:

			project.ext.vectoricons = [
			    iconFontNames: [ 'FontAwesome.ttf','MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
			]

			apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
		}
		
		{
			project.ext.vectoricons = [
		    iconFontNames: [ ‘FontAwesome.ttf’ ] // Name of the font files you want to copy
			]
			apply from: “../../node_modules/react-native-vector-icons/fonts.gradle”
		}

		// paket kurulumu sonrası cashe temizlemek için
		{
			$cd android && gradlew clean && cd ..
		}
	}

	// #### FIREBASE INSTALL ####
	{
		Install via NPM
		Install the React Native Firebase "app" module to the root of your React Native project with NPM or Yarn:

		Using npm
		$npm install --save @react-native-firebase/app

		Using Yarn
		$yarn add @react-native-firebase/app


		/android/app/src/main/AndroidManifest.xml
		"paket adı"nı kopyalayıp firebase içerisindeki alana ekliyoruz.

		console.firebase.google.com içerisinde sonraki adıma geçip 

		google-services.json
		dosyasını indiriyoruz

		bu dosyayı proje içinde 
		/android/app/google-services.json 
		içerisine yapıştırıyoruz.

		Proje düzeyinde build.gradle (<proje>/build.gradle):
		{
			buildscript {
			  repositories {
			    // Check that you have the following line (if not, add it):
			    google()  // Google's Maven repository
			  }
			  dependencies {
			    ...
			    // Add this line
			    classpath 'com.google.gms:google-services:4.3.4'
		  	}
		}
		
		{
			allprojects {
			  ...
			  repositories {
			    // Check that you have the following line (if not, add it):
			    google()  // Google's Maven repository
			    ...
			  }
			}
		}

		Uygulama düzeyinde build.gradle (<proje>/<uygulama modülü>/build.gradle):
		
		{
			apply plugin: 'com.android.application'
		 		// Add this line
		 		apply plugin: 'com.google.gms.google-services'
		 
		 		dependencies {
		 		  // Import the Firebase BoM
		 		  implementation platform('com.google.firebase:firebase-bom:26.0.0')
		 
		 		  // Add the dependencies for the desired Firebase products
		 		  //} https://firebase.google.com/docs/android/setup#available-libraries
		}


		// #### FIREBASE / [Authentication] modulü INSTALL ####
		{
			Installation
			Install & setup the app module

			$yarn add @react-native-firebase/app
			

			Install the authentication module

			$yarn add @react-native-firebase/auth
		}

		PROJEDE
		
		sayfamıza

		import auth from '@react-native-firebase/auth';

		yapıyoruz.


		Son olarak projeyi başlat
		
		$yarn android
	}

	// #### MODAL INSTALL ####
	{
		$npm i react-native-modal 
 
		$yarn add react-native-modal
	}

	// #### React Native Async Storage INSTALL ####
	{
		$yarn add @react-native-async-storage/async-storage
	}

	// #### MAPS INSTALL ####
	{
		Installation
		Install the library from npm:

		$npm install react-native-maps --save-exact

		$yarn add react-native-maps -E
	}
}