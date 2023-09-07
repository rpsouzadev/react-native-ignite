import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    
  })
}

export function tagCartUpdate(itemCount: string) {
  OneSignal.sendTag('cart_items_count', itemCount)
}