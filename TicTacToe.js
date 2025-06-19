// TicTacToe.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './assets/styles/styles'; 

export default function TicTacToe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TicTacToe</Text>
      <View style={styles.grid}>
        {[...Array(9)].map((_, i) => (
          <View key={i} style={styles.cell}>
            {/* Cells for X or O */}
          </View>
        ))}
      </View>
    </View>
  );
}
