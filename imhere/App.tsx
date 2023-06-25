import { StatusBar } from "expo-status-bar";
import Home from "./src/screeens/Home";

export default function App() {
  return (
    <>
    <Home />
    <StatusBar 
      style="light"
      backgroundColor="transparent"
      translucent
    />
    </>
  );
}

