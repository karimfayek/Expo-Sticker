import { StyleSheet, View, FlatList, Image, ScrollView, ImageBackground } from "react-native";
import { Text, Searchbar, Appbar, Button, Avatar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import i18n from '../i18n';
import { useState } from "react";
import Row from "../components/grid/Row";
import Column from "../components/grid/Column";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title, onPress }) => (
    <View style={styles.item}>
        <Image style={{ width: 100, height: 100 }} source={require('../assets/images/cat.jpg')} />
        <Text style={styles.text} onPress={onPress}> {i18n.t('register')}</Text>
    </View>
);

export default function HomeScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <ScrollView style={styles.container}>

                <Text style={{ color: 'blue' }}>Delevering to  <AntDesign name="caretdown" size={10} color="black" onPress={() => { navigation.navigate('Location') }} /> </Text>

                <Text>Al-Ryad </Text>

                <Row>
                    <Column size={12}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            style={{ backgroundColor: '#fff' }} />
                        <Text style={{ marginTop: 5, fontWeight: 'bold', fontSize: 25, alignSelf: 'center' }}>{i18n.t('welcome')}</Text>
                    </Column>

                </Row>
                <Column size={12}>
                    <Text style={styles.welcome}>{i18n.t('welcomeText')}</Text>
                </Column>
                <Row>
                    <Column size={12}>
                        <Text > {i18n.t('whatyouwant')}</Text>
                    </Column>
                </Row>
                <Row>
                    <Column size={4}>
                        <Item title='Category' />
                    </Column>
                    <Column size={4}>
                        <Item title='Category' />
                    </Column>
                    <Column size={4}>
                        <Item title='Category' />
                    </Column>
                    <Column size={4}>
                        <Item title='Category' />
                    </Column>
                    <Column size={4}>
                        <Item title='Category' />
                    </Column>

                </Row>
                <Row>
                    <Column size={12}>
                        <Text > {i18n.t('whatyouwant')}</Text>
                    </Column>
                </Row>
                <Row>
                    <Column size={12}>

                        <FlatList
                            data={DATA}
                            horizontal

                            showsHorizontalScrollIndicator
                            renderItem={({ item }) => <Item title={item.title} onPress={() => { navigation.navigate('Category') }} />}
                            keyExtractor={item => item.id} />
                    </Column>
                </Row>
                <Row>
                    <Column size={12}>
                        <Text > {i18n.t('whatyouwant')}</Text>
                    </Column>
                </Row>
                <Row>
                    <Column size={12}>

                        <FlatList
                            data={DATA}
                            horizontal
                            showsHorizontalScrollIndicator
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <>
                                <ImageBackground resizeMode="cover" source={require('../assets/images/choise.jpg')} style={{ width: 200, height: 100, margin: 10, justifyContent: 'end' }} onPress={() => { navigation.navigate('Category') }} >
                                <Text style={{
                                    color: 'white',
                                    fontSize: 19,
                                    lineHeight: 30,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    backgroundColor: '#000000c0'
                                }}>Inside</Text>
                                 </ImageBackground>
                            </>}
                        />
                    </Column>
                </Row>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 10,
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: 'rgb(248 249 255)'
        },
        banner: {
            flex: 1 / 4,

        },
        text: {
            textAlign: 'center'
        },
        cat: {
            backgroundColor: '#fff',
            flex: 1,
            width: '33.3%',
            alignItems: 'center',
            borderRightColor: '#f8f9ff',
            borderRightWidth: 7,
        },
        welcome: {
            marginTop: 5, fontWeight: 'bold', fontSize: 10, backgroundColor: '#fff', padding: 32, borderRadius: 7
        },
        item: {
            backgroundColor: '#fff',
            padding: 1,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        title: {
            fontSize: 32,
        },
        column: {
            backgroundColor: '#eee',
            padding: 10,
            marginBottom: 10,
        },
    }
)