// TicTacToe - This file holds logic to display the TicTacToe board.
// React imports
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, useWindowDimensions } from 'react-native';

//from project resources
import styles from './assets/styles/styles'; 


export default function TicTacToe() {
  var boardState = ['X', 'O', 'X', 'O', '', 'X', '', '', 'O']; //store state of the board

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
          {boardState.map((value, index) => (
            <View key={index} style={styles.cell}>
              <Text style={styles.cellText}>{value}</Text>
            </View>
          ))}
        </View>
      </View>

    <View style={styles.footer}>
    <View style={styles.footerTop}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.playerText}>Alex (X)</Text>
        <Text style={styles.orientationText}> vs </Text>
        <Text style={styles.playerText}>Reena (O)</Text>
        </View>
    </View>

    <View style={styles.footerBottom}>
        <Text style={styles.orientationText}>
        {isPortrait ? 'Portrait' : 'Landscape'}
        </Text>
    </View>
    </View>
    </View>
  );
}