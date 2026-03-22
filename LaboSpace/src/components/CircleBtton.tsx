import { JSX } from "react";
import { View,Text,StyleSheet,type ViewStyle } from "react-native";

interface Props {
    children: JSX.Element;
    style?: ViewStyle;
}

const CircleButton = (props: Props) => {
    const { children, style } = props;

    return(
        <View style={[ styles.circleButton, style ]}>{/*memoListの追加ボタン*/}
            <Text style={styles.circleButtonLabel}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButton:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467FD3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        //影のスタイル（ios専用スタイル）
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        //Androidの影のスタイル
        elevation: 8,
    },
    circleButtonLabel:{
        color: 'white',
        fontSize: 40,
        lineHeight: 48,
    }
})

export default CircleButton;