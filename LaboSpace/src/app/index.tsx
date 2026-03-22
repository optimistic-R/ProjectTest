import { View,Text,StyleSheet } from "react-native";

import Header from "../components/Header";
import MemoListItem from "../components/MemoListItem";
import CircleButton from "../components/CircleBtton";

const Index = () => {
    return (
        <View style={styles.container}>{/*//全体のフレーム*/}
            <Header />{/*//headerコンポーネントの呼び出し*/}
            <View>{/*//memoListの大枠*/}
                <MemoListItem />{/*//memoListItemコンポーネントの呼び出し*/}
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton>{/*//CircleButtonコンポーネントの呼び出し*/}
                ＋
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
export default Index