import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

let termsTextSize = 13;
let headingTextSize = 30;


const styles = StyleSheet.create ({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.white,
      },
      welcomeWrapper:{
        flex:1,
        display: 'flex',
        marginTop:30,
        padding:20,
      },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200, 
        marginLeft:68,  
    },
    welcomeText: {
        fontSize: 30,
        color: colors.green01,
        fontWeight: '300',
        marginBottom: 40,
        marginLeft: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 40,
        zIndex: 8,
    },
    moreOptionsButton: {
        marginTop: 25,
        justifyContent:'center',
        alignItems: 'center',
    },
    moreoptionsButtonText: {
        color: colors.green01,
        fontSize: 16,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 70,
    },
    termsText: {
        color: colors.green01,
        fontSize: 13,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.green01
    }
    });

    export default styles;
    
    