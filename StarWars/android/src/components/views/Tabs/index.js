import {Navigation} from 'react-native-navigation';
import FalseIcon from '../../../assets/images/circle.png';


const LoadTabs= ()=> {
    Navigation.startTabBasedApp({
        tabs:[
            {
                screen:"StarWars.Home",
                label:"Home",
                title:"Home",
                icon:FalseIcon
            },
            {
                screen:"StarWars.AddPost",
                label:"Sell it",
                title:"Sell it",
                icon:FalseIcon

            }
        ]
    })
}

export default LoadTabs;