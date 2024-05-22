import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import axiosCall from "../utils/axiosCall";
import { useEffect, useContext, useState } from "react";
import { AppContext } from "../store/AppContext";
import { Stack, useNavigation } from "expo-router";

type ItemProps = { Make_Name: string; Make_ID: string };

export default function Index() {
  const { year, setMake } = useContext(AppContext);
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const getMake = async () => {
    setLoading(true);
    try {
      const res = await axiosCall({
        url: `https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json`,
        method: "GET",
      });
      setLoading(false);

      console.log(res?.data?.Results);
      setData(res?.data?.Results);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMake();
  }, []);

  const Item = ({ Make_Name }: ItemProps) => (
    <Pressable
      onPress={() => {
        console.log("Press");
        setMake(Make_Name);
        navigation.navigate("Model");
      }}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{Make_Name}</Text>
      </View>
    </Pressable>
  );

  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({ item }: any) => (
              <Item Make_Name={item.Make_Name} Make_ID={item.Make_ID} />
            )}
            keyExtractor={(item) => item.Make_ID}
          />
        </View>
      )}
    </>
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
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
