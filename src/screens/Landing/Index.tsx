import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Img from '../../assets/landingImg.png';

const leafImg =
  'https://s3-alpha-sig.figma.com/img/5ce7/868e/229b9638248498cc3a45cce235c21007?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdAUVtwucZDwBqfo7o~-75yEdTRBcFOYZ3klg1JeHSRpxQ7UhOFhoz017GXVZOTj15nbyefWrj2StZxc8fbHjz--lvS8L61LfJ6KCizl0I3QjFv0U~Ek90qviHBk3cg-XwLhpjlAUtb24fmoxixwQuPyCf3PTjnYeppkMfq9ehB2r8m60j9q0VtknmGj~AJd6lOj0Rb9xZN6FxNTuotHto5UvRQuelqK8kDKlT-gLXIS9K4FDD9vIHEJmzfOxacijcpTNxbJ3iGECrZjYGeVLE0ZNvJYIwnH2~TD2alWuq9~aqq42bJ-KBhcHJZjUtOYBw8fhay~-6Pg~-gVZCZdQg__';

const LandingScreen = ({navigation}) => {
  // console.log('navigation', navigation);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // marginBottom: 50,
            padding: 40,
          }}>
          <Text
            style={{
              color: 'rgba(6, 22, 28, 1)',
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 20,
            }}>
            Get your groceries delivered to your home
          </Text>
          <Text
            style={{
              color: 'rgba(152, 162, 179, 1)',
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 60,
            }}>
            The best delivery app in town for delivering your daily fresh
            groceries
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#E48C06',
              height: 50,
              borderRadius: 30,
              width: '40%',
            }}
            onPress={() => navigation.navigate('Home')}>
            <Text
              style={{
                padding: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
              Let's go
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={Img} style={{width: '100%', resizeMode: 'cover'}} />
        </View>
      </View>
      <Image
        source={{uri: leafImg}}
        style={{
          position: 'absolute',
          top: 40,
          right: 40,
          resizeMode: 'cover',
          height: 40,
          width: 40,
          opacity: 0.7,
          tintColor: '#E48C06',
        }}
      />
      <Image
        source={{uri: leafImg}}
        style={{
          position: 'absolute',
          top: '50%',
          left: 40,
          resizeMode: 'cover',
          height: 40,
          width: 40,
          opacity: 0.5,
          transform: [{rotate: '-90deg'}],
          tintColor: '#E48C06',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    height: '100%',
    backgroundColor: '#f0ffff',
    //  justifyContent: 'end',
    position: 'relative',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default LandingScreen;
