import { View,Text,StyleSheet } from "react-native";

const MemoListItem = () => {
    return(
        <View style={styles.memoListItem}>{/*//memoItemの構造化*/}
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2026/03/22/11:00</Text>
            </View>
            <View>{/*//削除ボタンの構造化*/}
                <Text>X</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    memoListItem:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    memoListItemTitle:{
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate:{
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    }
})
export default MemoListItem;