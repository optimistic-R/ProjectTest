import { 
    View, Text, TextInput, StyleSheet, TouchableOpacity, Alert
} from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "../../components/Button";
import { auth } from "../../config"

{/* この関数は何も返さないのでvoid */}
const handlePress = ( email: string , password: string ): void => {
    //ログイン
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential.user.uid) 
        router.replace("/memo/list")
    })
    .catch((error) => {
        const { code, message } = error
        console.log( code, message )
        Alert.alert( message )
    })
}

const LogIn = ()=> {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <View style={styles.container}>

            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                < TextInput
                style={styles.input}
                value={email} //emailステートの値をTextInputのvalueに設定
                onChangeText={(text) => { setEmail(text) }} //入力されたテキストをemailステートに保存
                autoCapitalize="none" //自動で大文字にしない
                keyboardType="email-address" //メールアドレス入力に適したキーボードを表示
                placeholder="Email Address" //入力されていないときに表示されるヒントテキスト
                textContentType="emailAddress" //メールアドレスの自動入力を有効にする
                />
                < TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => { setPassword(text) }}
                autoCapitalize="none"
                secureTextEntry //パスワード入力を隠す
                placeholder="Password"
                textContentType="password"
                />
                <Button label="Submit" onPress={() => handlePress(email, password)} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Link href="/auth/sign_up" asChild replace>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up here!</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f0f4f8",
    },

    inner:{
      paddingVertical: 24,
      paddingHorizontal: 27,  
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
        marginBottom: 24,
    },
    input:{
        borderWidth: 1,
        borderColor: "#DDDDDD",
        
        backgroundColor: "#ffffff",

        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
    },

    footer:{
        flexDirection: "row",
    },
    footerText:{
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: "#000000",
    },
    footerLink:{
        fontSize: 14,
        lineHeight: 24,
        color: "#467FD3",
    }
})
export default LogIn