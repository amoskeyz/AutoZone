import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
// import { Pressable } from "react-native-gesture-handler";
import Button from "../components/Button";

export default function Index() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.name}>AutoZone</Text>
      <View style={styles.bottomView}>
        <View style={styles.button}>
          <Button
            text="Get Started"
            onPress={() => navigation.navigate("Year")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderColor: "#F1F2F6",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
  },
  bottomView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 60,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "700",
    fontSize: 32,
  },
  button: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
