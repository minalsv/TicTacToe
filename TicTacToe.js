// TicTacToe - This file holds logic to display the TicTacToe board.

// React imports
import React, { useState } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';

// from project resources
import styles from './assets/styles/styles';

export default function TicTacToe() {
  var boardState = ['O', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'O']; // store state of the board

  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  const [gridContainerHeight, setGridContainerHeight] = useState(0);
  const gridSize = Math.min(width * 0.9, gridContainerHeight * 0.95); // 95% of available grid space
  
  // 10% of the gridsize
  const dynamicFontSize = gridSize * 0.10;; //(isPortrait ? 32 : 22);

  //just for information, in final app remove or comment.
  console.log('Orientation: ',isPortrait? 'Portrait':'landscape')
  console.log('Font size:', dynamicFontSize);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TicTacToe</Text>
      </View>

      <View
        style={styles.gridContainer}
        onLayout={(event) =>
          setGridContainerHeight(event.nativeEvent.layout.height)
        }
      >
        <View style={[styles.grid, { width: gridSize, height: gridSize }]}>
          {boardState.map((value, index) => (
            <View key={index} style={styles.cell}>
              <Text style={[styles.cellTextBase, { fontSize: dynamicFontSize }]}>{value}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerTop}>
          <View style={{ flexDirection: 'row', alignItems: 'left' }}>
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
