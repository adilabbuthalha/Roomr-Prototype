import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

let headingTextSize = 30;
const styles = StyleSheet.create ({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.white,
    },
    ScrollViewWrapper: {
        marginTop: 70,
        flex: 1,
      },
      ScrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
      },
    forgotPasswordHeading: {
        fontSize: 28,
        color: colors.green01,
        fontWeight: '300',
    },
    forgotPasswordSubheading: {
        color: colors.green01,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60,
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
    }
});


export default styles;