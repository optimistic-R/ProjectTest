import { 
    View, TextInput, StyleSheet
 } from "react-native"
import { router } from "expo-router"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { useState } from "react"

import KeyboardAvoidingView from "../../components/KeyboardAvoidingView"
import CircleButton from "../../components/CircleBtton"
import Icon from "../../components/Icon"
import { db, auth } from "../../config"

const handlePress = /*async*/ (bodyText: string): void => {
    if(auth.currentUser === null) return
    const ref = collection(db, `users/${auth.currentUser?.uid}/memos`)

    //データの保存
    addDoc(ref,{
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then((docRef) => {
        console.log("データの保存に成功しました", docRef.id)
        router.back()
    })
    .catch(() => {
        console.log("データの保存に失敗しました")
    })

/*
    await addDoc(collection(db, "memos"),{
        bodyText: "test2"
    })
    .catch(() =>{
        console.log("データの保存に失敗しました")
    })
    router.back()
*/
}

const Create = ()=> {
    const [bodyText, setBodyText] = useState("")
    return(
        <KeyboardAvoidingView  style={styles.container}>

            <View style={styles.InputContainer}>
                <TextInput 
                multiline
                style={styles.Input}
                value={ bodyText} 
                onChangeText={(text) => { setBodyText(text) }}
                autoFocus //画面が表示されたときに自動でフォーカスするプロパティ
                /> {/* multilineは複数行入力を可能にするプロパティ */}
            </View>

            <CircleButton onPress={ () => handlePress(bodyText)}>
                <Icon name="check" size={40} color="#ffff" />
            </CircleButton>
        </KeyboardAvoidingView>
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

export default Create