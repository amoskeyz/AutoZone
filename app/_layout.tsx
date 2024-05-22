import { Stack } from "expo-router";
import Header from "../components/Header";
import { ContextProvider } from "../store/AppContext";

export default function RootLayout() {
  return (
    <ContextProvider>
      <Stack
        initialRouteName="index"
        screenOptions={{
          gestureEnabled: false,
          animation: "none",
          header: (navigation) => <Header navigation={navigation} />,
        }}
      >
        <Stack.Screen
          name="index"
          options={{ gestureEnabled: false, headerShown: false }}
        />
        <Stack.Screen name="Year" options={{ gestureEnabled: false }} />
        <Stack.Screen name="Make" options={{ gestureEnabled: false }} />
        <Stack.Screen name="Model" options={{ gestureEnabled: false }} />
        <Stack.Screen name="Finish" options={{ gestureEnabled: false }} />
      </Stack>
    </ContextProvider>
  );
}
