import { View,Text,StyleSheet,ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleBtton";

const Detail = () => {
    return(
        <View style={styles.container}>
            <Header />

            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2026/03/22 11:00</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>本文</Text>
            </ScrollView>

            <CircleButton style={{ top: 160, bottom: 'auto' }}>
                <Feather name="check" size={40} />
            </CircleButton>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },

    memoHeader:{
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle:{
        color: 'white',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    memoDate:{
        color: 'white',
        fontSize: 12,
        lineHeight: 16,
    },

    memoBody:{
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText:{
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
    }
})

export default Detail