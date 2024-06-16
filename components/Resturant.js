import { View, StyleSheet, FlatList, Image } from "react-native";
import { Text } from "react-native-paper";
import i18n from "../i18n";
import Row from "./grid/Row";
import Column from "./grid/Column";
import { Entypo, AntDesign } from '@expo/vector-icons';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Clintreo',
        image: '../assets/images/cilantro.png'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Elsharkawy',
        image: require('../assets/images/cilantro.png')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Bun n Bun',
        image: require('../assets/images/cilantro.png')
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e2asda',
        title: 'Third Item',
        image: require('../assets/images/cilantro.png')
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e29cve',
        title: 'Third Item',
        image: require('../assets/images/cilantro.png')
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e29axf',
        title: 'Third Item',
        image: require('../assets/images/cilantro.png')
    },
];
const Item = ({ title, onPress, image }) => (
    <>
        <Row style={{ margin: 10 }}>
            <Column size={5}>
                <Image style={{ width: 150, height: 100 }} source={image} />
            </Column>
            <Column size={7}>
                <Text style={{ fontWeight: 'bold' }} onPress={onPress}> Cilantro</Text>
                <Text style={{ fontSize: 10 }} onPress={onPress}> Cofee Baveradges</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Entypo name="star" size={20} color="gold" />
                    <Text>4.7 (100+)</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesign style={{ alignSelf: 'center' }} name="clockcircleo" size={15} color="black" />
                    <Text style={{ marginHorizontal: 10 }}>24 min</Text>
                </View> 

            </Column>
        </Row><View style={{ borderBottomWidth: 1, borderBottomColor: 'rgb(215 215 215)' }} /></>

);
export default function Resturant() {

    return (
        <View style={styles.main}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item image={item.image} title={item.title} onPress={() => { navigation.navigate('Category') }} />}
                keyExtractor={item => item.id} />
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,

    }
})