import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      navigation.replace("Home");
    };

    fetchData();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, ...styles.row }}>
        Trần Thị Phương Linh 20110126
      </Text>
      <Text style={{ fontSize: 20, ...styles.row }}>
        Nguyễn Hoàng Kha 20110500
      </Text>
      <Text style={{ fontSize: 20, ...styles.row }}>
        LẬP TRÌNH DI ĐỘNG NÂNG CAO
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    marginBottom: 10,
  },
});
export default LoadingScreen;
