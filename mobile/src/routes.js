import { createAppContainer } from "react-navigation";
import { createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Cardapio from './pages/Cardapio';


const Routes= createAppContainer(
  createStackNavigator({
    Main:{
      screen: Main,
      navigationOptions:{
        title:'Cardápio RU',
      }
      
    },
    Cardapio:{
      screen:Cardapio,
      navigationOptions:{
        title:'Cardápio do dia',
      }
    },
  },  {
    defaultNavigationOptions:{
      headerTintColor:'#E3E6E6',
      headerBackTitleVisible: null,
      headerStyle:{
        backgroundColor:'#C20407',

      },
    }
  })

);

export default Routes;