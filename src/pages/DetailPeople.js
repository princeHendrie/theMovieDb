import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from '../values/styles';
import color from '../values/colors';
import { Card, CardItem, Body } from 'native-base';
import {connect} from 'react-redux';
import {firstTime} from '../actions/DetailPeopleActions';
var Spinner = require('react-native-spinkit');

class DetailPeople extends Component {

    constructor(props){
        super(props);
        this.state = { biography: '', gender: '', birthday: '', placeOfBirth: '', knownForDepartment: ''}
     }

     componentWillMount(){
        this.props.firstTime(this.props.id);
    }

    componentWillReceiveProps(newProps){
        if(newProps.listData != this.props.listData){
           
            if(newProps.listData.length > 0){
                this.setState({ 
                    biography: newProps.listData[0]['biography'],
                    birthday: newProps.listData[0]['birthday'],
                    placeOfBirth: newProps.listData[0]['placeOfBirth'], 
                    knownForDepartment: newProps.listData[0]['knownForDepartment'], 
                })

                if(newProps.listData[0]['gender'] == 1){
                    this.setState({ gender: 'Female' })
                }else if(newProps.listData[0]['gender'] == 2){
                    this.setState({ gender: 'Male' })
                }
            }
            
        } 
     }

     renderForm() {
        if(!this.props.loading) {
            return (
                <View style={styles.containerDetailMovie}>
                   
                        <Image source = {{uri: this.props.profilePath }}
                                style = {styles.logoDetail}
                        />

                    <Card>
                        <CardItem header>
                            <Text>Biography :</Text>
                        </CardItem>
                        <CardItem header>
                        <Body>
                                <Text>
                                    {this.state.biography}
                                </Text>
                        </Body>
                        </CardItem>
                        <CardItem>
                        <Body>
                            <Text>
                                Name : {this.props.title}
                            </Text>
                            <Text>
                                Gender : {this.state.gender}
                            </Text>
                            <Text>
                                Birthday : {this.state.birthday}
                            </Text>
                            <Text>
                                Place Of Birth : {this.state.placeOfBirth}
                            </Text>
                        </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>Known For Department : {this.state.knownForDepartment}</Text>
                        </CardItem>
                    </Card>
               
             </View>
            );
        }
    }

    render() {
        return (
            <ScrollView>
            <View style={{flex: 1}}>

                <Spinner 
                            style={styles.spinnerKotak} 
                            isVisible={this.props.loading}
                            size={100}
                            type='Wave'
                            color={color.green}
                />

                {this.renderForm()}

                
            </View>
            </ScrollView>
        );
    }
}


const mapStateToProps = ({ detailPeople }) => {          
    const { listData, error, loading } = detailPeople;

    return { listData, error, loading };
};

export default connect(mapStateToProps, { firstTime }) (DetailPeople);