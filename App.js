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

import { styles } from "./src/style";

var iconWidth = 26;
var iconHeight = 26;

export default function App() {
  state = {
    ActiveScreen: 'HomeScreen'
  }
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
            <Text>
                Lorem Ipsum is simply dummy 
            </Text> 
        */}
        <Text style={styles.home_categories}>Categories</Text>
        <View style={styles.home_catery_group}>
          <View style={styles.home_catery_group_row}>
            <TouchableOpacity style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </TouchableOpacity>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
          </View>
          <View style={styles.home_catery_group_row}>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
          </View>
          <View style={styles.home_catery_group_row}>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
          </View>
          <View style={styles.home_catery_group_row}>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
          </View>
          <View style={styles.home_catery_group_row}>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
          </View>
          <View style={styles.home_catery_group_row}>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
            <View style={styles.category_box}>
              <FontAwesomeIcon name="file-text" style={styles.category_icon} />
              <Text style={styles.category_title}>Class Routine</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.navBar}>
        <Pressable style={styles.navMenuTouch}>
          <View style={styles.navMenu}>
            <View style={styles.navMenuActive}></View>
            <View style={styles.navIconBox}>
              <FontAwesomeIcon
                name="bell-o"
                style={styles.navIcon}
              ></FontAwesomeIcon>
            </View>
          </View>
        </Pressable>
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
