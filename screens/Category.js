import { StyleSheet, View } from "react-native";
import Row from "../components/grid/Row";
import Column from "../components/grid/Column";
import { Text,Appbar } from "react-native-paper";
import { MaterialIcons,Entypo } from '@expo/vector-icons';

export default function Category() {
    return (
        <>
         <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.navigate('Home') }} />
                <Appbar.Content title="category" />
                <Appbar.Action icon="heart" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>
        <View style={styles.main}>
            <View style={{height:20, justifyContent:'space-between' , flexDirection:'row'}}>
            <Text>All Resturant</Text>
            
            <View style={{flexDirection:'row',backgroundColor:'#fff' , borderRadius:5, position:'absolute' , right:0}}>
            <MaterialIcons name="computer" size={30} color="black" style={{marginRight:5}}/>
            <Entypo name="list" size={30} color="black" style={{backgroundColor:'azure'}}/>
            </View>
           
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create(
    {
        main: {
            flex: 1,
            padding:10
        }
    }
)