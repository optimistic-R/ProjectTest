import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import fontData from "../../assets/fonts/icomoon.ttf";
import fontSelection from "../../assets/fonts/selection.json";

const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,
<<<<<<< HEAD
    'IcoMoon',
=======
    'iconMoon',
>>>>>>> 537e8883c46f2bff300793a71fc589542d22caca
    'icomoon.ttf'
)

const Icon = () =>{
    const [fontLoaded] = useFonts({
<<<<<<< HEAD
        'IcoMoon': fontData
=======
        'icomoon': fontData
>>>>>>> 537e8883c46f2bff300793a71fc589542d22caca
    });

    if(!fontLoaded){
        return null;
    }

    return(
<<<<<<< HEAD
        <CustomIcon name='plus' size={40} color='red'/>
=======
        <CustomIcon name='plus' size={40} color={'red'}/>
>>>>>>> 537e8883c46f2bff300793a71fc589542d22caca
    )
}

export default Icon