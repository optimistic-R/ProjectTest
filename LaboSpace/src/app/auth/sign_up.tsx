import { 
    View, Text, TextInput, StyleSheet, TouchableOpacity, Alert
} from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../config"
import Button from "../../components/Button";

const handlePress = ( email: string, password: string ): void => {
    //会員登録
    console.log(email, password) //入力されたメールアドレスとパスワードをコンソールに表示

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { //登録に成功した場合は登録されたユーザー情報をコンソールに表示
        console.log(userCredential.user.uid); //登録されたユーザー情報をコンソールに表示
        //画面遷移のみ
        router.replace("/memo/list")
    } )
    .catch((error) => { //エラーが発生した場合はエラー内容をコンソールに表示

        const { code, message } = error //エラーコードとエラーメッセージをerrorオブジェクトから取得
        console.log( code, message ) //エラーコードとエラーメッセージをコンソールに表示
        Alert.alert( message ) //エラーメッセージをアラートで表示
    } )
}

const SignUp = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return(
        <View style={styles.container}>

            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
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
                <Button label="Submit" onPress={() => { handlePress(email, password) }} /> 
                    {/* handlePress関数に引数を渡し実行する */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link href="/auth/log_in" asChild replace>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log in</Text>
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
export default SignUp