import { View,Text,StyleSheet } from "react-native";

const Index = () => {
    return (
        <View style={styles.container}>{/*//全体のフレーム*/}

            <View>{/*//headerのフレーム*/}
                <View>{/*//headerの構造化*/}
                    <Text>LaboSpace</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>

            <View>{/*//memoListの大枠*/}

                <View>{/*//memoItemの構造化*/}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2026/03/22/11:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>{/*//memoItemの構造化*/}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2026/03/22/11:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>{/*//memoItemの構造化*/}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2026/03/22/11:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                
            </View>

            <View>{/*memoListの追加ボタン*/}
                <Text>＋</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Index