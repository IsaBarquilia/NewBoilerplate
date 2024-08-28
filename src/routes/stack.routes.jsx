import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import FilmesIsa from "../screens/FilmesIsa";
import FilmesLu from "../screens/FilmesLu";
import HobbiesIsa from "../screens/HobbiesIsa";
import HobbiesLu from "../screens/HobbiesLu";

const Stack = createNativeStackNavigator();


const StackRoutes = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FilmesIsa" component={FilmesIsa} />
        <Stack.Screen name="FilmesLu" component={FilmesLu} />
        <Stack.Screen name="HobbiesIsa" component={HobbiesIsa} />
        <Stack.Screen name="HobbiesLu" component={HobbiesLu} />
        </Stack.Navigator>
    );
}
export default StackRoutes;