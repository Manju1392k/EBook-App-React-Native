import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      {/* navbar */}
      <View style={styles.navbar}>
        <Feather name="menu" size={35} color="#fff" />

        <TextInput style={styles.search} placeholder="Search" />
      </View>

      <ScrollView>
        {/* image */}
        <View style={styles.imageback}>
          <Image
            style={styles.mainimg}
            source={require("./assets/book-stack.jpg")}
          />
        </View>

        {/* book information */}
        <View style={styles.bookinfoback}>
          <View style={styles.bookinfo}>
            <Text style={styles.infotext}>
              What is the importance of books in our life? Books play a
              quintessential role in every student’s life by introducing them to
              a world of imagination, providing knowledge of the outside world,
              improving their reading, writing and speaking skills as well as
              boosting memory and intelligence. he importance of books in our
              life cannot be undermined for they not only help in broadening our
              horizons but also act as doorways of connecting us with the world
              around us. They function as survival kits, they influence us and
              leave an impact on us. Want to know the benefits of books and the
              importance of reading? Curious about how books impact our lives?
              Read this blog to know all about the importance of books in a
              student’s life, essays on importance of reading books, quotes and
              more!
            </Text>
          </View>
        </View>
      </ScrollView>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 250,
  },

  mainimg: {
    width: "90%",
    height: 200,
    flexDirection: "row",
    borderRadius: 10,
  },

  bookinfoback: {
    width: "100%",
    height: 650,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  bookinfo: {
    width: "90%",
    height: 600,
  },

  infotext: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 25,
  },
});
