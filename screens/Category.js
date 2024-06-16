import { StyleSheet, View, Image, FlatList, ScrollView, TouchableOpacity, Modal, Pressable } from "react-native";
import Row from "../components/grid/Row";
import Column from "../components/grid/Column";
import { Text, Appbar, Checkbox, RadioButton } from "react-native-paper";
import i18n from '../i18n';
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import '../localStoragePolyfill';
import Resturant from "../components/Resturant";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Sort By',
        icon: 'down'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Rating 4.0 +',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Free Delivery',
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e2asda',
        title: 'Third Item',
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e29cve',
        title: 'Third Item',
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e29axf',
        title: 'Third Item',
    },
];

const Item = ({ title, onPress }) => (
    <View style={styles.item}>
        <Image style={{ width: 70, height: 70 }} source={require('../assets/images/cat.jpg')} />
        <Text style={styles.text} onPress={onPress}> {i18n.t('register')}</Text>
    </View>
);

const FilterModal = ({ visible, onClose, onApply, children }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.title}>Choose Options</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color="#000" size={22} />
                        </Pressable>
                    </View>
                    <ScrollView>
                        {children}
                    </ScrollView>
                    <Pressable onPress={onApply} style={styles.applyButton}>
                        <Text style={styles.buttonText}>Apply</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};
export default function Category({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkboxes, setCheckboxes] = useState({ option1: false, option2: false, option3: false });
    const [radioValue, setRadioValue] = useState('option1');
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleCheckboxChange = (name) => {
        setCheckboxes({ ...checkboxes, [name]: !checkboxes[name] });
    };
    const handleApply = () => {
        // Handle saving the choices
        console.log('Selected checkboxes:', checkboxes);
        console.log('Selected radio button:', radioValue);
        setModalVisible(false);
    };
    const Filterbutton = ({ title, icon, onPress }) => (

        <View style={{
            flex: 1,
            marginLeft: 10,
            padding: 10,
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 5, borderWidth: 1, borderColor: 'gray'

        }}>
            <TouchableOpacity style={{ color: 'gray', flexDirection: 'row', alignItems: 'center' }} onPress={onPress}>
                <Text>{title}</Text>
                {icon && <AntDesign name={icon} size={10} color="black" style={{ marginLeft: 7 }} />}
            </TouchableOpacity>
        </View>


    )

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.navigate("Home")}} />
                <Appbar.Content title="Title" />
                <Appbar.Action icon="calendar" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>

            <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal:10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>All Resturant</Text>
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 5, position: 'absolute', right: 0 }}>
                    <MaterialIcons name="computer" size={30} color="black" style={{ marginRight: 5 }} />
                    <Entypo name="list" size={30} color="black" style={{ backgroundColor: 'azure' }} />
                </View>
            </View>

            <View style={{ backgroundColor: '#d9d9d9' }}>
                <FlatList
                    data={DATA}
                    horizontal

                    showsHorizontalScrollIndicator
                    renderItem={({ item }) => <Item title={item.title} onPress={() => { navigation.navigate('Category') }} />}
                    keyExtractor={item => item.id} />
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={DATA}
                    horizontal
                    showsHorizontalScrollIndicator
                    renderItem={({ item }) => <Filterbutton title={item.title} icon={item.icon} onPress={toggleModal} />}
                    keyExtractor={item => item.id} />

            </View>
            <FilterModal visible={modalVisible} onClose={toggleModal} onApply={handleApply}>
                <Text>Filter</Text>
                <Checkbox.Item
                    label="Option 1"
                    status={checkboxes.option1 ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckboxChange('option1')}
                />
                <Checkbox.Item
                    label="Option 2"
                    status={checkboxes.option2 ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckboxChange('option2')}
                />
                <Checkbox.Item
                    label="Option 3"
                    status={checkboxes.option3 ? 'checked' : 'unchecked'}
                    onPress={() => handleCheckboxChange('option3')}
                />
                <Text>Category</Text>
                <RadioButton.Group onValueChange={value => setRadioValue(value)} value={radioValue}>
                    <RadioButton.Item label="Option 1" value="option1" />
                    <RadioButton.Item label="Option 2" value="option2" />
                    <RadioButton.Item label="Option 3" value="option3" />
                </RadioButton.Group>
            </FilterModal>
            <Resturant />
        </>
    )
}

const styles = StyleSheet.create(
    {
        main: {
            flex: 1,
            padding: 10,

        },
        item: {
            margin: 5,
            padding: 10,
            borderWidth: 1,
            borderColor: '#fff',
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 12,

        },
        modalOverlay: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        },
        modalContent: {
            width: '100%',
            height: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 20,
        },
        modalHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        flatListContainer: {
            backgroundColor: '#fff',
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
        },
        applyButton: {
            padding: 10,
            backgroundColor: '#000',
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10,
          },
    }
)