import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import { styles } from "./src/style";

var iconWidth = 26;
var iconHeight = 26;

export default function App() {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <View style={styles.header_title}>
                    <Text style={styles.header_title_bdim}>BDIM</Text>
                    <Text style={styles.header_title_student}>Student</Text>
                </View>
            </View>
            <ScrollView style={styles.content_area}>
                <View style={styles.welcome_wrapper}>
                    <View style={styles.welcome_box}>
                        <Text style={styles.welcome_message}>Welcome TO React Native</Text>
                    </View>
                </View>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
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
                        <View style={[styles.navMenuActiveBar, styles.navMenuActive]}>

                        </View>
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