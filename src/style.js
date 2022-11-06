import { StyleSheet, Dimensions  } from "react-native";

var bodyWidth = Dimensions.get('window').width;
var bodyHeight = Dimensions.get('window').height;

console.log(bodyHeight - (100 + 60));

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "rgba(232,232,232,1)"
    },
    header: {
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
        width: bodyWidth,
        height: 100,
    },
    header_title: {
        width: bodyWidth ,
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline",
        marginTop: 50
    },
    header_title_bdim: {
        fontSize: 32,
        marginRight: 5
    },
    header_title_student: {
        fontSize: 14,
    },
    content_area: {
        height: (bodyHeight - (100 + 60)),
        padding: 20,
    },
    welcome_wrapper: {
        width: '100%',
        marginTop: 200,
        alignItems: 'center',
    },
    welcome_box: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 193,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 20,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
          width: 10,
          height: 10
        },
        elevation: 30,
        shadowOpacity: 1,
        shadowRadius: 10,
        margin: 50
    },
    welcome_message: {
        color: "#121212",
        fontSize: 22,
    },
    home_categories:{
        color: "#121212",
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    home_catery_group:{
        marginBottom: 30,
    },
    home_catery_group_row:{
        flexDirection: 'row'
    },
    category_box:{
        flex:1,
        alignItems: 'center',
        padding: 20,
        margin: 15,
        backgroundColor: "rgba(255,163,1,1)",
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
          width: 3,
          height: 4
        },
        elevation: 18,
        shadowOpacity: 0.25,
        shadowRadius: 6
    },
    category_icon:{
        color: "rgba(255,255,255,1)",
        fontSize: 40
    },
    category_title:{
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginTop: 15,
    },
    navBar: {
        width: bodyWidth,
        height: 60,
        flexDirection: "row",
        display: "none"
    },
    navMenuTouch:{
        flex:3,
    },
    navMenu: {
        backgroundColor: "rgba(255,255,255,1)",
        width: (bodyWidth / 3),
        height: 60,
        alignItems: 'center'
    },
    navIconBox:{
        height: 56,
        justifyContent: 'center'
    },
    navMenuActiveBar:{
        backgroundColor: "rgba(255,163,1,1)"
    },
    navMenuActive: {
        width: 31,
        height: 4
    },
    navIcon:{
        color: "#ffa301",
        fontSize: 28
    }
});