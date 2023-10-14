import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  question: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 300,
    padding: 32,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  title: {
    fontSize: 16,
    marginBottom: 7,
    textAlign: 'center',
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
  },
  header: {
    width: '100%',
  }
});