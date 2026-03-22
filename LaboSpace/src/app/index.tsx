import { View,Text,StyleSheet } from "react-native";

const Index = () => {
    return (
        <View style={styles.container}>{/*//全体のフレーム*/}

            <View style={styles.header}>{/*//headerのフレーム*/}
                <View style={styles.headerInner}>{/*//headerの構造化*/}
                    <Text style={styles.headerTitle}>LaboSpace</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>

            <View>{/*//memoListの大枠*/}

                <View style={styles.memoListItem}>{/*//memoItemの構造化*/}
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2026/03/22/11:00</Text>
                    </View>
                    <View>{/*//削除ボタンの構造化*/}
                        <Text>X</Text>
                    </View>
                </View>

                <View style={styles.memoListItem}>{/*//memoItemの構造化*/}
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2026/03/22/11:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View style={styles.memoListItem}>{/*//memoItemの構造化*/}
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2026/03/22/11:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

            </View>

            <View style={styles.circleButton}>{/*memoListの追加ボタン*/}
                <Text style={styles.circleButtonLabel}>＋</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
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
    },

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
    },

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
export default Index