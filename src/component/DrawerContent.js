import React from "react"
import {View, StyleSheet} from "react-native"
import {Text, Drawer } from "react-native-paper"
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer"
import store from "../store/StoreAuth"

export default function DrawerContent(props){
  function signOut(){
    store.SignOut();
  }
 return(
    <View style = {{flex:1}}>
        <DrawerContentScrollView style={{marginLeft: 10}} {...props}>
        <Text>
            {store.loginForStatus}
        </Text>
        </DrawerContentScrollView>
      
        <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem  label="Sign out" onPress = {signOut}/>

        </Drawer.Section>
    </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 50,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });