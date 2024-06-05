import { StyleSheet, View, FlatList, Image, ScrollView } from "react-native";
import { Text, Searchbar, Appbar, Button, Avatar } from 'react-native-paper';
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

const Item = ({ title }) => (
    <View style={styles.item}>
        <Image style={{ width: 100, height: 100 }} source={require('../assets/images/cat.jpg')} />
        <Text style={styles.text}> {i18n.t('register')}</Text>
    </View>
);

export default function HomeScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Title" />
                <Appbar.Action icon="calendar" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>

            <ScrollView style={styles.container}>

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
                    <Column size={12}>

                        <FlatList
                            data={DATA}
                            horizontal
                            renderItem={({ item }) => <Item title={item.title} />}
                            keyExtractor={item => item.id} />
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
            marginTop: 5, fontWeight: 'bold', fontSize: 10, alignSelf: 'center' , backgroundColor:'#fff',padding:32, textAlign:'right', borderRadius:7
        },
        item: {
            backgroundColor: '#fff',
            padding: 20,
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