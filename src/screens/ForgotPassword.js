import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/form/Notification';
import NavBarButton from '../components/buttons/NavBarButton';
import Loader from '../components/Loader';
import styles from './styles/ForgotPassword';

export default class ForgotPassword extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <NavBarButton
          handleButtonPress={() => navigation.goBack()}
          location="left"
          icon={<Icon name="ios-arrow-dropleft" color={colors.green01} size={30} />}
        />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.green01,
    });
    constructor(props) {
        super(props);
        this.state = {
          formValid: true,
          loadingVisible: false,
          validEmail: false,
          emailAddress: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.goToNextStep = this.goToNextStep.bind(this);
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
    }
    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;
        
        this.setState({ emailAddress: email });

        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
              this.setState({ validEmail: true });
            }
          } else if (!emailCheckRegex.test(email)) {
            this.setState({ validEmail: false });
          }
      }
      goToNextStep() {
        const { emailAddress } = this.state;
        this.setState({ loadingVisible: true });
        setTimeout(() => {
          if (emailAddress === 'no@gmail.com') {
            this.setState({
              loadingVisible: false,
              formValid: false,
            });
          } else {
            this.setState({
              loadingVisible: false,
              formValid: true,
            });
          }
        }, 2000);
    }
    handleCloseNotification() {
        this.setState({ formValid: true });
    }
    render() {
        const { loadingVisible, formValid, validEmail } = this.state;
        const background = formValid ? colors.white : colors.white;
        const showNotification = !formValid;
    return (
         <KeyboardAvoidingView
         style={[{backgroundColor: background}, styles.wrapper]}
         behavior="padding"
         >
            <View style={styles.ScrollViewWrapper}>
            <ScrollView style={styles.ScrollView}>
                 <Text style={styles.forgotPasswordHeading}>Forgot your password?</Text>
                 <Text style={styles.forgotPasswordSubheading}>Enter your email to reset your password</Text>
                 <InputField
                     customStyle={{marginBottom: 30}}
                     textColor={colors.green01}
                     labelText="EMAIL ADDRESS"
                     labelTextSize={14}
                     labelColor={colors.green01}
                     borderBottomColor={colors.green01}
                     inputType="email"
                     onChangeText={this.handleEmailChange}
                    />
            </ScrollView>
           
                 <NextArrowButton 
                     handleNextButton={this.goToNextStep}
                     disabled={!validEmail}
                 />
             </View>
             <Loader 
                 modalVisible={loadingVisible}
                 animationType= "fade"
             />
             <View style={styles.notificationWrapper}>
                    <Notification
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        type="Error"
                        firstLine="Sorry, no account exists for the requested"
                        secondLine="email address"
                 />
             </View>
         </KeyboardAvoidingView>
     );
 }
}

