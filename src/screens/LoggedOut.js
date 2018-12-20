import React, {Component} from 'react';
import colors from '../styles/colors';
import { StyleSheet, 
    Text, 
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import transparentHeaderStyle from '../styles/navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LoggedOut';

const roomrLogo = require('../img/roomr-logo.png');

export default class LoggedOut extends Component {
    static navigationOptions = ({ navigation }) => ({
      headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Log In" />,
      headerStyle: transparentHeaderStyle,
      headerTransparent: true,
      headerTintColor: colors.green01,
    });
  
    static onFacebookPress() {
      alert('Facebook button pressed');
    }
  
    static onCreateAccountPress() {
      alert('Create Account button pressed');
    }
  
    static onMoreOptionsPress() {
      alert('More options button pressed');
    }
  
  render() {
    return (
        <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
            <Image 
            source = {roomrLogo}
            style={styles.logo}
            />
            <Text style={styles.welcomeText}>welcome to roomr</Text>
            <RoundedButton 
                text="Continue with Facebook"
                textColor={colors.green01}
                background={colors.white}
                icon={<Icon name="logo-facebook" size={20} style={styles.facebookButtonIcon}/>}
                handleOnPress={this.onFacebookPress}
            />
            <RoundedButton 
                text="Create Account with Student Email"
                textColor={colors.white}
                background={colors.green01}
                handleOnPress={this.onCreateAccountPress}
            />

            <TouchableHighlight style={styles.moreOptionsButton}
            onPress={this.OnMoreOptionsPress}
            >
                <Text style={styles.moreoptionsButtonText}>More Options</Text>
            </TouchableHighlight>

            <View style={styles.termsAndConditions}>
                <Text style={styles.termsText}>By tapping Continue, Create Account, or More options, I agree to Roomr's </Text>
                <TouchableHighlight style={styles.linkButton}>
                    <Text style={styles.termsText}>Terms and Conditions</Text>
                </TouchableHighlight>
                <Text style={styles.termsText}>,</Text>
                <TouchableHighlight style={styles.linkButton}>
                    <Text style={styles.termsText}>Privacy Policy</Text>
                </TouchableHighlight>
                <Text style={styles.termsText}>,</Text>
                <TouchableHighlight style={styles.linkButton}>
                    <Text style={styles.termsText}>Security Rules</Text>
                </TouchableHighlight>
            </View>
         </View>   
         </ScrollView>
    );
  }
}



