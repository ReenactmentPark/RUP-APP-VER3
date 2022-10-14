import React,{useEffect,useState,useRef} from 'react'
import {
    View,
    Image,
    Dimensions,
    Modal,
    Pressable,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import { useNavigation,useIsFocused } from '@react-navigation/native';
import { MMKV } from 'react-native-mmkv'
import BottomSheet_Main from './BottomSheet_Main';
import CalendarModal from './CalenderModal'
import SeedModal from './SeedModal'
import styles from './style';
import Video from "react-native-video";
export const storage = new MMKV()

function Main(){
  if(storage.getString('user')===undefined){  //user정보 캐싱되지 않았다면 서버 통해서 user정보 return,캐싱
      const user = {
          userName: '박재연',
          email: 'jaeyeon7531@gmail.com',
          phoneNumber: '010-7151-1918',
          pw:'123456',
          profileImage:'https://image.fnnews.com/resource/media/image/2022/07/16/202207160834208420_l.jpg',
          point:0,
          recycle:0
          //
          }      
      storage.set('user', JSON.stringify(user))
  }
  const isFocused = useIsFocused();
  const screenHeight = Dimensions.get("screen").height;   //phone 높이,폭 px
  const screenWidth = Dimensions.get("screen").width;
  const navigation = useNavigation()
  const jsonUser = storage.getString('user') // { 'userName': '박재연', 'point': 0 }
  const userObject = JSON.parse(jsonUser)
  const [modalVisible,setModalVisible]=useState(false)
  useEffect(() => {}, [isFocused]);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [seedModalVisible,setSeedModalVisible] = useState(true)
  const success =[
    "2022-08-01", "2022-08-14"
  ];

 const player = useRef(null)


    setInterval(()=>{
       player.current.seek(0)
       console.log("2")
    },2000)

    return(
      <>
        <View style={{flex:1}}>
            <ImageBackground 
                style={{
                    height: '100%',
                    width: '100%',
                }}
                source={require('../../imageResource/background/bg_04.png')}>
                <View >
                    <View style={styles.topLineContainer}>
                        <View style={styles.topLineLeft}>
                            <View style={styles.flexDirectionRow}>
                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate('InFullBloom')}
                                    style={styles.profileImageContainer}>
                                    <Image 
                                        source={{uri:userObject.profileImage}}
                                        style={styles.profileImage}/>
                                </TouchableOpacity>
                                <View style={{justifyContent:'center',marginLeft:'5%',flexDirection:'column'}}>
                                    <Text style={styles.name}>{userObject.userName}</Text>
                                    <View style={styles.flexDirectionRow}>
                                        <Image source={require('../../imageResource/icon/ic_point.png')}/>
                                        <Text style={{marginLeft:'8%'}}>{userObject.point}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.calenderAndNoticeBoxContainer}>
                            <View style={styles.calenderAndNoticeBox}>
                                <TouchableOpacity
                                    onPress={()=>setCalendarModalVisible(true)}
                                >
                                    <Image 
                                        style={{marginRight:'15%'}}
                                        source={require('../../imageResource/icon/ic_calendar.png')}
                                    />
                                    
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('Notice')}>  
                                    <Image source={require('../../imageResource/icon/ic_notice.png')}/>
                                </TouchableOpacity>  
                            </View>
                        </View>
                    </View>
                    <View style={{height:'10%'}}/>
                    <View style={{alignItems:'center',height:'60%'}}>
                        <Text style={styles.tulipText}>튤리비와 함께 N일째</Text>
                        <Video 
                            ref={(ref)=>{
                                player.current = ref
                            }}
                            source={require('../../imageResource/flower/flower1.mp4')}
                            repeat={true}
                            controls={false}
                            
                            style={{
                                position: "absolute",
                                top: 180,
                                left: 120,
                                bottom: 0,
                                right: 0
                            }}
                        />    
                    </View>
                    <View style={{alignItems:'center',height:'15%',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>setModalVisible(true)}>  
                          <View style={{height:'20%'}}/>
                          <Image style={{width:70,height:70}} source={require('../../imageResource/icon/qrcode.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <BottomSheet_Main
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                />
                <CalendarModal
                  calendarModalVisible={calendarModalVisible}
                  setCalendarModalVisible={setCalendarModalVisible}
                />
                <SeedModal
                  seedModalVisible={seedModalVisible}
                  setSeedModalVisible={setSeedModalVisible}
                />
            </ImageBackground>
        </View>
      </>
  )
}

export default Main