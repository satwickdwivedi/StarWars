import {Navigation} from 'react-native-navigation';




import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';


Navigation.registerComponent("StarWars.Login",()=> Login);
Navigation.registerComponent("StarWars.Home",()=> Home);
Navigation.registerComponent("StarWars.AddPost",()=> AddPost);


export default()=> Navigation.startSingleScreenApp({
  screen:{
    screen:"StarWars.Login",
    title:"Login",
    navigatorStyle:{
      navBarHidden:true
    }



  }




})
