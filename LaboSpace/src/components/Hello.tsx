import { View, Text, StyleSheet, type TextStyle } from "react-native";

//Propsの型定義(必ず渡さなければいけない)
interface Props {
    children: string
    bang?: boolean //オプションとして自由な扱いを受けられるようにした
    style? : TextStyle
}

// propsは型を定義する必要がある
const Hello = (props: Props) => {

    //分割代入(非構造化)
    const { children, bang, style } = props
    return (
        <View>
            <Text style={[styles.text, style]}>

                {/* 三項演算子の活用｛条件式 ? trueのときの値 : falseのときの値｝ */}
                Hello {children}{bang === true ? '!' : ''}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: 'white',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,
    }
})

export default Hello