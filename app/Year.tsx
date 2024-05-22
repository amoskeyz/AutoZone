import { Text, View, Pressable, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { yearsData } from "../data";

type ItemProps = { title: string };

export default function Index() {
  const navigation = useNavigation();
  const { year, setYear } = useContext(AppContext);

  const Item = ({ title }: ItemProps) => (
    <Pressable
      onPress={() => {
        setYear(title);
        navigation.navigate("Make");
      }}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={yearsData}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#F1F2F6",
    borderTopWidth: 2,
    paddingBottom: 20,
  },
});
