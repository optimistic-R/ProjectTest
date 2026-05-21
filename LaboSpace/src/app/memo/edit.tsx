import { View, TextInput, StyleSheet } from "react-native";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleBtton";
import Icon from "../../components/icon";

const Edit = ()=> {
    return(
        <View style={styles.container}>
            <Header />

            <View style={styles.InputContainer}>
                <TextInput multiline style={styles.Input} value={"買い物\nリスト"} /> {/* multilineは複数行入力を可能にするプロパティ */}
            </View>

            <CircleButton>
                <Icon name="check" size={40} color="#ffff" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    InputContainer:{
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1,
    },
    Input:{
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
    }
})

export default Edit