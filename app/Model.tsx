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
import { useNavigation } from "expo-router";

export default function Index() {
  const { year, make, setModel } = useContext(AppContext);
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigation = useNavigation();

  const getMake = async () => {
    setLoading(true);
    try {
      const res = await axiosCall({
        url: `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`,
        method: "GET",
      });
      setLoading(false);

      // console.log(res?.data?.Results);
      setData(res?.data?.Results);
    } catch (e: any) {
      console.log(e);
      console.log(e.response);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMake();
  }, []);

  type ItemProps = { Make_Name: string; Make_ID: string; Model_Name: string };

  const Item = ({ Model_Name }: ItemProps) => (
    <Pressable
      onPress={() => {
        setModel(Model_Name);
        navigation.navigate("Finish");
      }}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{Model_Name}</Text>
      </View>
    </Pressable>
  );

  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      ) : data.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({ item }: any) => (
              <Item
                Make_Name={item.Make_Name}
                Make_ID={item.Make_ID}
                Model_Name={item.Model_Name}
              />
            )}
            keyExtractor={(item) => item.Make_ID}
          />
        </View>
      ) : (
        <View style={styles.loading}>
          <Text style={styles.errorText}>oops!!</Text>
          <Text style={styles.errorText}>Data Not Availble</Text>
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
  errorText: {
    fontSize: 20,
    fontWeight: "500"
  }
});
