import {createStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen'
export const AppStackNavigator = createStackNavigator({

BookDonateList : {
    screen : BookDonateScreen,
    navigationOptions : {
        headerShown : false
    }
},
RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions : {
        headerShown : false
    }
},

},
{
    initialRouteName : "BookDonateList"
}

)