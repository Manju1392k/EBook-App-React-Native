import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      {/* navbar */}
      <View style={styles.navbar}>
        <Feather name="menu" size={35} color="#fff" />

        <TextInput style={styles.search} placeholder="Search" />
      </View>

      {/* image */}
      <View style={styles.imageback}>
        <Image
          style={styles.mainimg}
          source={require("./assets/book-stack.jpg")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  navbar: {
    marginTop: 40,
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
  },

  search: {
    width: 180,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingLeft: 10,
  },

  imageback: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250,
  },

  mainimg: {
    width: "90%",
    height: 200,
    flexDirection: 'row',
    borderRadius: 10,
  },
});
