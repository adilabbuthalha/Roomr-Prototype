import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    label,
    textColor
} from 'react-native';

export default class Inputfield extends Component {

    constructor(props) {
        super(props);
        this.state ={
            secureInput: props.inputType === 'text'|| props.inputType === 'email' ? false: true,
        };
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
    }

    toggleShowPassword(){
        this.setState({ secureInput: !this.state.secureInput });
    }

    render() {
        const{ labelText, labelTextSize, textColor, borderBottomColor, inputType, customStyle, onChangeText }= this.props;
        const {secureInput } =this.state;
        const fontSize = labelTextSize || 14;
        const color = label || colors.green01;
        const inputColor = textColor || colors.green01;
        const borderBottom = borderBottomColor || 'transparent';
        return(
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
                {inputType === 'password' ? 
                <TouchableOpacity
                    style = {styles.showButton}
                    onPress={this.toggleShowPassword}
                > 
                <Text style={styles.showButtonText}> {secureInput ? 'Show' : 'Hide' }</Text>
                </TouchableOpacity>
                : null }
                <TextInput
                    autoCorrect={false}
                    style={[{color: inputColor, borderBottomColor: borderBottom}, styles.inputField]}
                    secureTextEntry={secureInput}
                    onChangeText={onChangeText}
                />
            </View>
     );
    }
}

Inputfield.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
    onChangeText: PropTypes.func,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    label: {
        fontWeight:'700',
        marginBottom: 20,

    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    },
    showButton: {
        position: 'absolute',
        right: 0,
    },
    showButtonText: {
        color: colors.green01,
        fontWeight: '700',

    },
});
