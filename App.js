import { useFonts } from 'expo-font';
import MainContainer from './navigation/MainContainer';

const App = () => {

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  // Fonts not loaded for some reason
  if(!loaded) return null;

  return (
    <MainContainer></MainContainer>
  );
}

export default App;
