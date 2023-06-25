import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 16,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff'
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#e23c44',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  }
})