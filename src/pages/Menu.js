import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Content, List, ListItem, Separator, Thumbnail } from 'native-base';
import styles from '../values/styles';
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                 <View style={styles.containerMenu}>
                    <Image style={styles.logoTMDB}
                            source={require('../images/icon.png')} />
                 </View>
                <View style={styles.listMenu}>
                    <Content>
                        <List>
                            <Separator bordered>
                                <Text>MOVIES</Text>
                            </Separator>
                            <ListItem onPress={() => Actions.topRatedMovies()}>
                                <Text>Top rated movies</Text>
                            </ListItem>
                            <ListItem onPress={() => Actions.upcomingMovies()}>
                                <Text>Upcoming movies</Text>
                            </ListItem>
                            <ListItem onPress={() => Actions.nowPlayingMovies()}>
                                <Text>Now playing movies</Text>
                            </ListItem>
                            <ListItem onPress={() => Actions.popularMovies()}>
                                <Text>Popular movies</Text>
                            </ListItem>
                            
                            <Separator bordered>
                                <Text>TV SHOWS</Text>
                            </Separator>
                            <ListItem onPress={() => Actions.popularTVShows()}>
                                <Text>Popular TV shows</Text>
                            </ListItem>
                            <ListItem onPress={() => Actions.topRatedTVShows()}>
                                <Text>Top rated TV shows</Text>
                            </ListItem>
                            <ListItem onPress={() => Actions.onTheAirTVShows()}>
                                <Text>On the air TV shows</Text>
                            </ListItem>
                            <ListItem onPress={() => Actions.airingTodayTVShows()}>
                                <Text>Airing today TV shows</Text>
                            </ListItem>

                            <Separator bordered>
                                <Text>PEOPLE</Text>
                            </Separator>
                            <ListItem onPress={() => Actions.popularPeople()}>
                                <Text>Popular people</Text>
                            </ListItem>

                        </List>
                    </Content>
                </View>
                
            </View>
        );
    }
}

export default Menu;