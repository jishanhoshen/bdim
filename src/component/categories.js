import { Text, TouchableOpacity, View } from "react-native";

import { FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';
import { styles } from '../style';

function Categories() {
  return (
    <View>
      <Text style={styles.home_categories}>Categories</Text>
      <View style={styles.home_catery_group}>
        <View style={styles.home_catery_group_row}>
          <TouchableOpacity
            // onPress={() => props.navigation.navigate("App")}
            style={styles.category_box}
          >
            <FontAwesomeIcon name="file-text" style={styles.category_icon} />
            <Text style={styles.category_title}>Class Routine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <FontAwesomeIcon name="file-text" style={styles.category_icon} />
            <Text style={styles.category_title}>Class Routine</Text>
          </TouchableOpacity>
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
    </View>
  );
}
export default Categories;
