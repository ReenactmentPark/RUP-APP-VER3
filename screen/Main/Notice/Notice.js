import React,{useEffect,useState}  from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Pressable,
    Modal
} from 'react-native'
import BigList from "react-native-big-list";
import {useNavigation} from '@react-navigation/native';
import styles from './style'
import Notice_modal from './Notice_modal';
function Notice(){
  const navigation = useNavigation()

  const renderItem = ({item}) => (
      <Item date={item.date} point={item.point}/>
  );
  const Item = ({date,point}) => (
    <View>
        <View style={styles.horizonalLine}/>
        <View style={{marginTop:'3.5%',marginLeft:30,flexDirection:'row',alignItems:'center'}}>
          <Image style={{width:20,height:20}} source={require('../../../imageResource/icon/ic_point_notice.png')}/>
          <Text style={{marginLeft:'5%',fontWeight:'bold',fontSize:15}}>{date} {point}point 적립되었습니다.</Text>
        </View>
    </View>
  );
  const [noticemodalVisible, setnoticeModalVisible] = useState(false);
  const [text, setText]=useState('공지사항')
  return(
    <>
      <Notice_modal
        noticemodalVisible={noticemodalVisible}
        setnoticeModalVisible={setnoticeModalVisible}
        text={text}
      />
    
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          onPress={()=>navigation.goBack()}
          style={{marginTop:'7%',marginLeft:30,width:40}}                
        >
          <Image source={require('../../../imageResource/icon/ic_arrow_left.png')}/>
        </TouchableOpacity>
        <View style={styles.horizonalLine}/>
        <TouchableOpacity
          style={{marginTop:'5%',marginLeft:30,flexDirection:'row',alignItems:'center'}}
          onPress={()=>setnoticeModalVisible(true)}
        >
          <Image style={{width:20,height:20}} source={require('../../../imageResource/icon/ic_notice_02.png')}/>
          <Text style={{marginLeft:'5%',fontWeight:'bold'}}>[공지사항] v 1.1 업데이트 되었습니다.</Text>
        </TouchableOpacity>
        <SafeAreaView style={{height:'80%'}}>
          <BigList
            data={Data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </SafeAreaView>
    </>
  )
}

export default Notice

const Data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      date: '22.01.01',
      point: '1'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '2'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '3'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '2'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '4'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '5'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: '22.01.01',
        point: '1'
      },

    
  ];