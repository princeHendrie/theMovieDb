import { StyleSheet } from 'react-native';
import color from './colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: color.greenBlack,
    },
    containerMenu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.greenBlack,
    },
    containerMovies: {
        justifyContent: 'center',
        flex: 1,
        //paddingTop: 0,
        backgroundColor: color.greenBlack,
    },
    containerDetailMovie: {
        flex: 1,
        backgroundColor: color.greenBlack,
    },
    containerSearch: {
        flex: 1,
        backgroundColor: color.greenBlack,
    },
    logoDetail: {
        width: '100%',
        height: 600,
        resizeMode: 'cover',
    },
    logoTMDB: {
        resizeMode: 'contain',
        width: 150,
        height: 150,
    },
    listMenu:{
        flex: 3,
        backgroundColor: color.greySoft,
    },
    spinnerKotak: {
        alignSelf: 'center',
        marginTop: 150,
    },
    flatview: {
        paddingTop: 10,
        borderRadius: 2,
    },
    imageThumbnail: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 300,
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadmoreBtnText: {
        color: color.white,
        fontSize: 15,
        textAlign: 'center',
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    whiteText: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        color: color.white,
        fontWeight: 'bold'
    },
    iconSearch:{
        marginTop:5,
        color: color.grey,
        flex: 0,
    },
    inputSearch:{
        marginBottom:10,
        paddingBottom: 20,
        paddingRight:0,
        height:48,
    },
    card:{
        backgroundColor: color.green,
    },
    header:{
        flex: 0,
        marginBottom:10,
        marginTop:10,
        marginRight:15,
        marginLeft:15,
        padding:5,
        height:40,
        backgroundColor: color.white,
        borderRadius:3,
    },
    
      
})
export default styles;