import { View,Text,StyleSheet } from "react-native"
import { router, useNavigation } from "expo-router"
import { useEffect } from "react"

import MemoListItem from "../../components/MemoListItem"
import CircleButton from "../../components/CircleBtton"
import Icon from "../../components/Icon"
import LogOutButton from "../../components/LogOutButton"

const handlePress = (): void => {
    router.push("/memo/create")
}

const List = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, []) //画面が表示されたときに一度だけ実行される

    return (
        <View style={styles.container}>{/*//全体のフレーム*/}
            <View>{/*//memoListの大枠*/}
                <MemoListItem />{/*//memoListItemコンポーネントの呼び出し*/}
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton onPress={handlePress}>{/*//CircleButtonコンポーネントの呼び出し*/}
                <Icon name="plus" size={40} color="#ffff" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
})
export default List