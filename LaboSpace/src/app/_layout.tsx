//特殊なファイル(テンプレート)
import { Stack } from 'expo-router';

const Layout = () => {
  return <Stack screenOptions={{
    headerStyle:{
      backgroundColor: '#467FD3',
    },
    headerTintColor: '#ffffff',
    headerTitle: "LaboSpace",
    headerBackTitle: "Back",
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
  }} />; //受け取った画面をそのまま表示する
}

export default Layout;