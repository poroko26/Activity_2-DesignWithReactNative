import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';
const src = require("./assets/search-symbol.png");
const temple = require("./assets/templeRun.jpg");
const recom = require("./assets/recommendation.png");
const dl = require("./assets/download.png");
const sh = require("./assets/youtube-shorts.png");
const yt = require("./assets/youtube.png");
const fb = require("./assets/facebook.png");
const vg = require("./assets/vidgame.png");
const tt = require("./assets/tiktok.png");
const ig = require("./assets/instagram.png");
const twett = require("./assets/twitter.png");
const fp = require("./assets/firstPic.png");
const bet = require("./assets/1xBet.png");
const i = require("./assets/letter-i.png");
const sp = require("./assets/secondPic.png");
const hp = require("./assets/homepage.png");
const mn = require("./assets/musical-note.png");
const dl2 = require("./assets/download.png");
const ur = require("./assets/user.png");



const App = () => {

  const Header = () =>{
    return(
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style = {styles.wrapper}>
            <Image source={src} style={styles.headersrc}/>
            <Text style = {styles.URL}>Search or Enter url</Text>
          </View>
            <Image source={temple} style={styles.image}/>
            <Image source={recom} style={styles.image}/>
            <Image source={dl} style={styles.image}/>
        </View>
        <View style = {styles.choicesContainer}>
        <View style = {styles.shortsWrapper}>
          <Image source={sh} style={styles.imageshorts}/>
          <Text style = {styles.shText}>Shorts</Text>
          <Text style = {styles.red}>.</Text>
        </View>
        <View style = {styles.sideContainer}>
          <Text style = {styles.choiceTextStyle}>Featured</Text>
          <Text style = {styles.choiceText}>Music</Text>
          <Text style = {styles.choiceText}>Movie</Text>
          <Text style = {styles.choiceText}>Apps</Text>
          <Text style = {styles.choiceText}>Game</Text>
        </View>
        <View style = {styles.appContainer}>
          <View style = {styles.appWrapper}>
            <Image source={yt} style={styles.imagesApp}/>
            <Text style = {styles.nameText}>Youtube</Text>
          </View>
          <View style = {styles.appWrapper}>
            <Image source={fb} style={styles.imagesApp}/>
            <Text style = {styles.nameText}>Facebook</Text>
          </View>
          <View style = {styles.appWrapper}>
            <Image source={vg} style={styles.imagesApp}/>
            <Text style = {styles.nameText}>VidGame</Text>
          </View>
          <View style = {styles.appWrapper}>
            <Image source={tt} style={styles.imagesApp}/>
            <Text style = {styles.nameText}>Tiktok</Text>
            </View>
          <View style = {styles.appWrapper}>
            <View style = {styles.group}>
              <Image source={ig} style={styles.imagesAppGroup}/>
              <Image source={twett} style={styles.imagesAppGroup}/>
              <Image source={tt} style={styles.imagesAppGroup}/>
              <Image source={yt} style={styles.imagesAppGroup}/>
            </View>
              <Text style = {styles.nameText}>Sites</Text>
            </View>
        </View>
      </View>
        <View style = {styles.pic}>
          <Image source={fp} style={styles.picture1}/>
        </View>
        <View style = {styles.adContainer}>
          <Text style = {styles.nameText}>Welcome package up to 5000 + 150 Free spins</Text>
          <View style = {styles.betContainer}>
            <Image source={bet} style={styles.logo}/>
            <Text style = {styles.betText}>1xbet</Text>
            <View style = {styles.adsContainer}>
              <Text style = {styles.adText}>AD</Text>
            </View>
            <View style = {styles.regContainer}>
              <Text style = {styles.regText}>REGISTER</Text>
            </View>
            <Image source={i} style={styles.iLogo}/>
          </View>
        </View>
        <View style = {styles.pic}>
          <Image source={sp} style={styles.picture2}/>
        </View>
        <View style = {styles.footerContainer}>
        <View style = {styles.footWrapper}>
            <Image source={hp} style={styles.footerApp}/>
            <Text style = {styles.nText}>HOME</Text>
        </View>
        <View style = {styles.footWrapper}>
            <Image source={mn} style={styles.footerApp}/>
            <Text style = {styles.nText}>MUSIC</Text>
        </View>
        <View style = {styles.footWrapper}>
            <Image source={dl2} style={styles.footerApp}/>
            <Text style = {styles.nText}>MY FILES</Text>
        </View>
        <View style = {styles.footWrapper}>
            <Image source={ur} style={styles.footerApp}/>
            <Text style = {styles.nText}>ME</Text>
        </View>
        </View>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15,
  },

  subContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  wrapper: {
    flexDirection: 'row',
    width: '65%',
    height: 35,
    paddingLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#e9ecef',
  },

  URL: {
    marginLeft: 20,
  },

  headersrc: {
    width: 22,
    height:22,
  },

  image: {
    width: 30,
    height:30,
  },

  choicesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: .2,
    shadowRadius:10,
  },

  shortsWrapper: {
    flexDirection: 'row',
    marginLeft: 15,
    width: 80,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#000',
    borderRightWidth: 1,
  },

  red: {
    fontSize: '4rem',
    marginBottom: 60,
    color: '#c1121f',
  },

  sideContainer: {
    flexDirection: 'row',
    marginRight: 8,
    width: 250,
    height: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }, 

  choiceText: {
    fontSize: 14,
  },

  choiceTextStyle: {
    borderStyle: 'solid',
    borderColor: '#c1121f',
    borderBottomWidth: 4,
  },

  imageshorts: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  shText: {
    fontSize: 14,
  },

  appContainer: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: 60,
    top: 55,
    justifyContent: 'space-evenly'

  },

  imagesApp: {
    width: 35,
    height: 35,
  },

  group: {
    width: 35,
    height: 35,
    backgroundColor: '#adb5bd',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    borderRadius: 6,

  },

  imagesAppGroup: {
    width: 14,
    height: 14,
    flexDirection: 'row'
  },

  appWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  nameText: {
    fontSize: 12
  },

  picture1: {
    marginTop: 90,
    width: '100%',
    height: 185
  },

  adContainer: {
    width: '100%',
    height: 90,
    padding: 15,
  },

  betContainer: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row'
  },

  logo: {
    height: 9,
    width: 50,
    borderStyle: 'solid',
    borderColor: '#000',
    borderBottomWidth: 1,
    borderTopWidth: 1
  },

  betText: {
    fontSize: 10,
    marginRight: 5
  },

  adText: {
    fontSize: 10,
    marginLeftt: 5
  },

  adsContainer: {
    backgroundColor: '#adb5bd',
    alignItems: 'center',
    width: 20,
    marginLeftt: 5,
    marginRight: 150,
    borderRadius: 3
  },

  regContainer: {
    backgroundColor:'#0496ff',
    width: 80,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  regText: {
    fontSize : 10.5 ,
    color: '#fff',
  },

  iLogo: {
    height: 15,
    width: 15,
    marginTop: 50
  },

  picture2: {

    width: '100%',
    height: 185
  },

  footerContainer:  {
    flexDirection: 'row',
    //flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: 60,
    top: 650,
    justifyContent: 'space-evenly',
    borderColor: '#8d99ae',
    borderTopWidth: 1
  },

  footerApp: {
    width: 23,
    height: 23,
  },

  footWrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  nText: {
    fontSize: 9
  },

});

export default App;
