import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from '../values/styles';
import { Card, CardItem, Body } from 'native-base';

class DetailMovie extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{flex: 1}}>
                <View style={styles.containerDetailMovie}>
                   
                    <Image source = {{uri: this.props.posterPath }}
                            style = {styles.logoDetail}
                    />

                <Card>
                    <CardItem header>
                        <Text>Overview :</Text>
                    </CardItem>
                    <CardItem header>
                    <Body>
                            <Text>
                                {this.props.overview}
                            </Text>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Body>
                        <Text>
                            Title : {this.props.title}
                        </Text>
                        <Text>
                            Original Title : {this.props.originalTitle}
                        </Text>
                        <Text>
                            Rating : {this.props.voteAverage}
                        </Text>
                    </Body>
                    </CardItem>
                    <CardItem footer>
                        <Text>Release Date : {this.props.releaseDate}</Text>
                    </CardItem>
                </Card>
                   

                   
                 </View>
            </View>
            </ScrollView>
        );
    }
}

export default DetailMovie;