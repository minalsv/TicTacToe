// assets/styles/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2F', // dark navy background
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // 3D text effect via shadow
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  gridContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#4A90E2', // bright blue border
    backgroundColor: '#2A2A3D', // darker blue-gray cell background
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // subtle 3D shadow
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  cellText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  cellTextBase: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
   textShadowRadius: 1,
  },
 footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerTop: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
    footerBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orientationText: {
    fontSize: 16,
    color: '#4A90E2', // lighter bluish-gray
  },
    playerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#A0A0C0',
    marginHorizontal: 10,
  },
});
