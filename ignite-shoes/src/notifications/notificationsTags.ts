import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    'user_name': 'Rpsouza',
    'user_email': 'rpsouza.linux@gmail.com'
  })
}