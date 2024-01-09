import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LoadingScreen from "./assets/component/LoadingScreen";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <>
      {!loadingComplete ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>Trang chủ!</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    alignItems: "center",
  },
});

export default App;
