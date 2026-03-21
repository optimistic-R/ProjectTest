//特殊なファイル(テンプレート)
import { Slot } from 'expo-router';

export default function Layout() {
  return <Slot />; //受け取った画面をそのまま表示する
}