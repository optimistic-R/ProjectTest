import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

declare const process: {
  env: { [key: string]: string | undefined }
} // 環境変数の型を定義している TypeScriptは環境変数が存在することを認識し、型安全にアクセスできるようになります。

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID
};

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }