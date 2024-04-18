import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FontIcon from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
const width = Dimensions.get('window').width;
const sliderImg =
  'https://s3-alpha-sig.figma.com/img/fe58/4271/07b7791b21514d6fab75b22212441780?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LWwZZ4GloTD1TlaFJgd4uy74-smkUf5QoKt3iCtsupomXanOTNgNbOOzVRey5Ksb0ZHknuH8jC5c3rfHf0QIh~MI2jAwZje7inWgHC-Dy4AysiIvuKIg8Fm19sY~Fd9kRADsW7ZaUL7CPLHpcL3A29iosg15TKcuS7API5liKpsLqYCRN~KBxoyYSWcZVbJvZGOX~chRj16X~MjO5txtJ8DXSNsT0EMdE8rv7Quz5uopp8GUcpP-fPbUZ9VxfZXGoqxxDnlsD8PJ8ZtsFiZzFE26oywLWO6bv6-pIoccd5rwxm5-2VGDW3JOJ6vsIjxacDfkfd0xJiFPj0plfGOQyw__';
const vegImg =
  'https://s3-alpha-sig.figma.com/img/e563/1a05/80ed4c5b8e6b0b53e338ea8eddadf5a9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AxKFOLm2vJb5cTTK-WQNYKiQgwZH~Nw1VeBpvuEGry6-ynuW8MimrUN53CiNP8ouzwRtP0mJCgU8fh~SGX6rFaAm-qw8eu7ELYcMGaaSs0jttFpQI1nYFsCaxXWAgjMYSu9qWrF1iEenf17oXVYEekY--D6Bdow4PAx1RMpWoiESCzHgTgoSOg-mDWvJ8~TkXsw2O71a0LtTI7GLynTi-4mShohGAVNNrDXcnqMcwk-1wI5zyQZcTk0ShT16hGRiv4tN2~A-Yjoj1TgiTdwJwDmr9pIwchr-eJrOc7thUBMFsLVhLhBe~NJ6CUVLNMrb4DJ8kke8N--E7taWGIu3UQ__';
const productImg =
  'https://s3-alpha-sig.figma.com/img/caa4/d051/eab64e058825ca59bdad59993c7acadd?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=od88NtG2wspZWDKOiZI7eNHx4K82lPgHb-MqUroy9TceO2~CsEMZ6RvpaaXj8yQoDqePicvXQ7PxTQ5u5fGJZ9e6LTYGW~I5iPSxjJMCBeONw63FI735R6M0lZF51q6vBnKVCwyNbDa1YBfhmpdLu0e6ZqtIuQkAJzG0Mj3UtZCRwyA8UFhsEbRkVyf1OKyawE0axt763r8d63-DegZiwHtQf8Hrqnv-0lKYf13HWFcHdoM-ErrNzGLYa-r~8xwU2NSEomeHyN6n2ZXpqZ1R~Ch6zOiRmDxH6yDVZLZhQ4gRSPQhuUjzFyG7XWYazbS5Dlej4w1y~aQPgr0-jHk1qQ__';

const HomeScreen = () => {
  const data = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2', color: '#52ba60'},
    {id: '3', title: 'Item 3', color: 'rgba(35, 130, 170, 1)'},
    {id: '4', title: 'Item 4', color: '#8d52ba'},
    {id: '5', title: 'Item 3', color: 'rgba(35, 130, 170, 1)'},
    {id: '6', title: 'Item 4', color: '#8d52ba'},
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        // padding: 20,
        // borderWidth: 1,
        // borderBottomColor: 'red',
        // width: 320,
        // marginRight: 30,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
      }}>
      <Image
        source={{uri: sliderImg}}
        style={{
          resizeMode: 'cover',
          height: 125,
          // borderWidth: 2,
          // borderColor: 'red',
          // zIndex: 1,
        }}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: item.color || '#E48C06',
          height: 200,
          width: 200,
          zIndex: 10,
          top: -50,
          left: -50,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
          transform: [{rotate: '0deg'}],
        }}>
        <Text></Text>
      </View>
    </View>
  );
  const renderCategoryItem = ({item}) => (
    <View
      style={{
        // padding: 20,
        // borderWidth: 1,
        // borderBottomColor: 'red',
        width: 80,
        // marginRight: 30,
        borderRadius: 60,
        height: 80,
        margin: 10,
        backgroundColor: 'rgb(213,228,235)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{uri: vegImg}}
        style={{
          resizeMode: 'contain',
          // borderWidth: 2,
          // borderColor: 'red',
          borderRadius: 60,
          // zIndex: 1,
          height: 70,
          width: 70,
          backgroundColor: 'transparent',
        }}
      />
    </View>
  );
  const renderProductItem = ({item}) => (
    <View
      style={{
        // flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // padding: 20,
        // borderWidth: 1,
        // borderBottomColor: 'red',
        width: 185,
        borderWidth: 1,
        borderColor: 'rgba(222, 222, 222, 1)',
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        position: 'relative',
      }}>
      <Image
        source={{uri: productImg}}
        style={{
          width: 100,
          height: 100,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
          resizeMode: 'contain',
          marginTop: 30,
          marginBottom: 5,
        }}
      />
      <View
        style={{
          flex: 1,
          width: '100%',
          padding: 5,
          paddingLeft: 17,
          paddingBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 5,
            color: 'red',
          }}>
          480da
        </Text>
        <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
          <Text
            style={{
              fontSize: 18,
              color: '#888',
              textDecorationLine: 'line-through',
            }}>
            630da
          </Text>
          <Text style={{fontSize: 14, color: '#888'}}>6</Text>
        </View>
        {/* Add other product details as needed */}
        <Text style={{fontSize: 14, color: 'black'}}>
          Bell Pepper Nutella karmen lopu...
        </Text>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          top: '50%',
          right: 20,
        }}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingTop: 15,
          paddingBottom: 25,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: '#E48C06',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: '#E48C06',
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
                width: '60%',
                borderRadius: 15,
                padding: 10,
                paddingLeft: 15,
                paddingRight: 5,
                backgroundColor: 'white',
              }}>
              <FontIcon name="location-dot" size={24} color="#E48C06" />
              <Text
                style={{
                  color: 'black',
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: 500,
                }}>
                Algiers, 435..
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              borderColor: '#E48C06',
            }}>
            <MaterialCommunityIcon name="menu-open" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            position: 'relative',
          }}>
          <IoniconsIcon
            name="search"
            size={30}
            color="#E48C06"
            style={{position: 'absolute', top: '20%', left: 10, zIndex: 1}}
          />
          <TextInput
            style={{
              borderRadius: 15,
              color: 'black',
              paddingLeft: 50,
              fontSize: 17,
              backgroundColor: 'white',
            }}
            placeholder="What are u looking for ?"
            placeholderTextColor="rgba(152, 162, 179, 1)"
          />
        </View>
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        {/* <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          // style={{flex: 1, gap: 10}}
        /> */}
        <Carousel
          // layout={'default'}
          ref={c => {
            this._carousel = c;
          }}
          data={data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={320}
        />
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        <FlatList
          horizontal
          data={data}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          style={{flex: 1}}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          alignItems: 'center',
          gap: 10,
        }}>
        <FlatList
          data={data}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
