import { View,Text,StyleSheet } from "react-native";

const Header = () => {
    return(
        <View style={styles.header}>{/*//headerのフレーム*/}
            <View style={styles.headerInner}>{/*//headerの構造化*/}
                <Text style={styles.headerTitle}>LaboSpace</Text>
                <Text style={styles.headerRight}>ログアウト</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end',
    },
    headerInner:{
        alignItems: 'center',
    },
    headerTitle:{
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    headerRight:{
        position: 'absolute',
        //右下に配置するためのスタイル
        right: 16, //右から16離した位置に配置
        bottom: 16, //下から16離した位置に配置
        color: 'rgba(255, 255, 255, 0.7)', //半透明の白色
    }
})

export default Header;