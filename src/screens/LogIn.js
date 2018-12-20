import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/form/Notification';
import Loader from '../components/Loader';
import styles from './styles/LogIn';
import NavBarButton from '../components/buttons/NavBarButton';


class LogIn extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: <NavBarButton
          handleButtonPress={() => navigation.navigate('ForgotPassword')}
          location="right"
          color={colors.green01}
          text="Forgot Password"
        />,
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
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
        }
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }
    handleNextButton() {
        this.setState({ loadingVisible: true });
        const { logIn, navigation } = this.props;
        const { navigate } = navigation;
    
        setTimeout(() => {
          const { emailAddress, password } = this.state;
          if (logIn(emailAddress, password)) {
            this.setState({ formValid: true, loadingVisible: false });
            navigate('TurnOnNotifications');
          } else {
            this.setState({ formValid: false, loadingVisible: false });
          }
    }, 2000);
    }

    handleCloseNotification() {
        this.setState({ formValid: true });

    }
    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;
        this.setState({ emailAddress: email });

        if (!this.state.validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true });
                if (!emailCheckRegex.test(email)) {
                    this.setState({ validEmail: false });
                }
            }
        }
    }

    handlePasswordChange(password) {
        this.setState({ password});

        if (!this.state.validPassword) {
            if (password.length > 4) {
                this.setState({ validPassword: true });
            }
        } else if (password <= 4) {
            this.setState({ validPassword: false });
        }
    }
    toggleNextButtonState() {
        const { validEmail, validPassword } = this.state;
        if (validEmail && validPassword) {
            return false;
        }
        return true;
    }

    render() {
        const { formValid, loadingVisible, validEmail, validPassword } = this.state;
        const showNotification = formValid ? false : true;
        const background = formValid ? colors.white : colors.white;
        const notificationMarginTop = showNotification ? 10 : 0;

        return (
            <KeyboardAvoidingView
                style={[{ backgroundColor: background }, styles.wrapper]}
                behavior="padding"
            >
                <View style={styles.ScrollViewWrapper}>
                    <ScrollView style={styles.ScrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField
                            labelText="STUDENT EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.green01}
                            borderBottomColor={colors.green01}
                            inputType="email"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleEmailChange}
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.green01}
                            borderBottomColor={colors.green01}
                            inputType="password"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handlePasswordChange}
                        />
                    </ScrollView>
                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                    />
                    <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
                        <Notification
                            showNotification={showNotification}
                            handleCloseNotification={this.handleCloseNotification}
                            type="Error"
                            firstLine="Sorry, those credentials aren't right."
                            secondLine="Please try again, or click 'Forgot Password'"
                        />
                    </View>
                </View>
                <Loader
                    modalVisible={true}
                    animationType="fade"
                />
            </KeyboardAvoidingView>
        );
    }
}


const mapStateToProps = state => ({
    loggedInStatus: state.loggedInStatus,
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);
  
  LogIn.propTypes = {
    logIn: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(LogIn);