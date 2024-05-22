import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
// import { Pressable } from "react-native-gesture-handler";
import Button from "../components/Button";
import { AppContext } from "../store/AppContext";
import { useContext } from "react";

export default function Index() {
  const navigation = useNavigation();
  const { year, make, model, setMake } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={styles.finishContainer}>
        <View style={[styles.finishView, styles.item]}>
          <Text style={styles.name}>Year:</Text>
          <Text style={styles.finishValue}>{year}</Text>
        </View>
        <View style={[styles.finishView, styles.item]}>
          <Text style={styles.name}>Make:</Text>
          <Text style={styles.finishValue}>{make}</Text>
        </View>
        <View style={styles.finishView}>
          <Text style={styles.name}>Model:</Text>
          <Text style={styles.finishValue}>{model}</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.button}>
          <Button text="Finish" onPress={() => navigation.navigate("index")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
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
    fontWeight: "500",
    fontSize: 16,
  },
  button: {
    width: "100%",
    paddingHorizontal: 20,
  },
  finishView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
  },
  finishContainer: {
    borderColor: "#F1F2F6",
    borderWidth: 1,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  finishValue: {
    color: "grey",
    fontWeight: "500"
  },
});
