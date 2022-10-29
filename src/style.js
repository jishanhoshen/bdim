import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: "green",
    },
    header:{
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        elevation: 15,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: 20,
        width: '100%',
        height: 100
    },
    header_title: {
        width: '100%',
        flexDirection: "row",
        marginTop: 50,
        textAlign: "center"
    },
    institute: {
        width: '100%',
        textAlign: "center",
        color: "#121212",
        fontSize: 32,
    },
    userType: {
        color: "#121212",
        fontSize: 18,
    },
    nav:{
        backgroundColor: 'red'
    }
});
