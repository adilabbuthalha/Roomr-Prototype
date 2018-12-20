import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Text,
    TouchableHighlight,
    StyleSheet,
    View,
} from 'react-native';

export default class NextArrowButton extends Component {
    render(){
        const {disabled, handleNextButton} =this.props;
        const opacityStyle = disabled ? {backgroundColor: 'rgba(255, 255,255,0.2)'} : {backgroundColor: 'rgba(255, 255,255,0.6)'};
        return (
            <View style={styles.buttonWrapper}>
            <TouchableHighlight
                style={[opacityStyle, styles.button]}
                onPress={handleNextButton}
                disabled={disabled}
                >
                <Icon 
                name= "ios-arrow-dropright" 
                color={colors.green01}
                size={50}
                style={StyleSheet.icon}
                />
            </TouchableHighlight>
            </View>
        );
    }
}

NextArrowButton.propTypes ={
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func
};
const styles = StyleSheet.create ({
    buttonWrapper: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 20,
        
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
    },

    icon: {
        marginRight: -20,
        marginTop: -2,
    }
});
