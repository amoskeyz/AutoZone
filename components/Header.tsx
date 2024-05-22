import { Text, SafeAreaView, View, StyleSheet, Pressable } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ArrowLeft2, CloseCircle } from "iconsax-react-native";
import { useContext } from "react";
import { AppContext } from "../store/AppContext";
const navbarHeight = hp("11.5%");

export default function Header({ navigation }: any) {
  const { year, make } = useContext(AppContext);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Pressable
            style={styles.backButton}
            onPress={() =>
              navigation.navigation.canGoBack() &&
              navigation.navigation.goBack()
            }
          >
            <View style={styles.backButton}>
              {navigation.route.name === "Year" ? (
                <CloseCircle size="32" color="#FF8A65" />
              ) : (
                <ArrowLeft2 size="32" color="#FF8A65" />
              )}
            </View>
          </Pressable>

          <View>
            <Text style={styles.title}>
              {`Choose ${navigation.route.name}`}
            </Text>
            <Text style={{ textAlign: "center" }}>{`${
              navigation.route.name === "Make" ||
              (navigation.route.name === "Model" && year)
                ? year
                : ""
            } ${navigation.route.name === "Model" && make ? make : ""}`}</Text>
          </View>
          <Text></Text>
        </View>
        <View style={styles.navTabView}>
          <Text
            style={
              navigation.route.name === "Year"
                ? styles.navTabViewTextActive
                : styles.navTabViewText
            }
          >
            Year
          </Text>
          <Text
            style={
              navigation.route.name === "Make"
                ? styles.navTabViewTextActive
                : styles.navTabViewText
            }
          >
            Make
          </Text>
          <Text
            style={
              navigation.route.name === "Model"
                ? styles.navTabViewTextActive
                : styles.navTabViewText
            }
          >
            Model
          </Text>
          <Text
            style={
              navigation.route.name === "Engine"
                ? styles.navTabViewTextActive
                : styles.navTabViewText
            }
          >
            Engine
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: navbarHeight,
    justifyContent: "space-between",
    zIndex: 999,
  },
  backButton: {
    flex: 0.5,
    justifyContent: "center",
    // padding: 5
  },

  navTabView: {
    flexDirection: "row",
    borderColor: "#F1F2F6",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: hp(5),
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  navTabViewText: {
    color: "#78828C",
  },
  navTabViewTextActive: {
    fontWeight: "600",
    color: "#000",
  },
  headerView: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  title: {
    fontSize: hp("2.1"),
    fontWeight: "500",
    color: "#000000",
    textAlign: "center",
  },
});
