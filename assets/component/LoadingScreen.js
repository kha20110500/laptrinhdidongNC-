import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, ...styles.row }}>
        Trần Thị Phương Linh 20110126
      </Text>
      <Text style={{ fontSize: 20, ...styles.row }}>
        Nguyễn Hoàng Kha 20110500
      </Text>
      <Text style={{ fontSize: 20, ...styles.row }}>
        LẬP TRÌNH DI ĐỘNG NÂNG CAO
      </Text>
      <ActivityIndicator size="large" color="#0000ff" />
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
