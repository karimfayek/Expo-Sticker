import { Appbar , Text} from "react-native-paper";
import { View } from "react-native";
export default function Cart({ navigation }) {

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.navigate('Home') }} />
                <Appbar.Content title="Cart" />
                <Appbar.Action icon="calendar" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Cart Page</Text>
            </View>
        </>
    )
}