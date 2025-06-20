//This is the main App file which calls required functions to display and make the TicTacToe app work.
// React imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//from project resources
import styles from './assets/styles/styles'; //project styles are stored here
import TicTacToe from './TicTacToe'; //game display logic


export default function App() {
  return  <TicTacToe />; //get the board look from TicTacToe
}


