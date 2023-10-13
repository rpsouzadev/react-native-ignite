import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  history: {
    padding: 32,
  },
  SwipeableContainer: {
    height: 90,
    width: '100%',
    borderRadius: 6,
    marginBottom: 12,
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
  },
  SwipeableRemove: {
    width: 90,
    height: 90,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
  }
});