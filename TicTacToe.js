// TicTacToe - This file holds logic to display the TicTacToe board.
// React imports
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, useWindowDimensions } from 'react-native';

//from project resources
import styles from './assets/styles/styles'; 


export default function TicTacToe() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  // Calculate grid size: the smaller of 90% width or 80% height (adjust as needed)
  const gridSize = Math.min(width * 0.9, height * 0.7); // when the orientation is changed, the size of the grid shall be 
  // based on the height for landscape, and width for protrait.

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TicTacToe</Text>
      </View>

      <View style={styles.gridContainer}>
        <View style={[styles.grid, { width: gridSize, height: gridSize }]}>
          {Array.from({ length: 9 }).map((_, i) => (
            <View key={i} style={styles.cell} />
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.orientationText}>{isPortrait ? 'Portrait' : 'Landscape'}</Text>
      </View>
    </View>
  );
}