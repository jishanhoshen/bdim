import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
// import Categories from "./src/component/categories";


function Layout() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.header_title}>
          <Text style={styles.header_title_bdim}>BDIM</Text>
          <Text style={styles.header_title_student}>Student</Text>
        </View>
      </View>
      <ScrollView style={styles.content_area}>
        {/* <View style={styles.welcome_wrapper}>
                <View style={styles.welcome_box}>
                    <Text style={styles.welcome_message}>Welcome TO React Native</Text>
                </View>
            </View>
        */}
        {/* <Categories styles={styles} /> */}
      </ScrollView>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navMenuTouch}>
          <View style={styles.navMenu}>
            <View style={styles.navMenuActive}></View>
            <View style={styles.navIconBox}>
              <FontAwesomeIcon
                name="bell-o"
                style={styles.navIcon}
              ></FontAwesomeIcon>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navMenuTouch}>
          <View style={styles.navMenu}>
            <View
              style={[styles.navMenuActiveBar, styles.navMenuActive]}
            ></View>
            <View style={styles.navIconBox}>
              <FontAwesomeIcon
                name="home"
                style={styles.navIcon}
              ></FontAwesomeIcon>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navMenuTouch}>
          <View style={styles.navMenu}>
            <View style={styles.navMenuActive}></View>
            <View style={styles.navIconBox}>
              <FontAwesomeIcon
                name="user"
                style={styles.navIcon}
              ></FontAwesomeIcon>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Layout;
