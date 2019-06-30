import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import styles from '../values/styles';
import color from '../values/colors';
import {connect} from 'react-redux';
import {loadmore, firstTime} from '../actions/TopRatedMovieActions';
import {hostImg} from '../config/config';
import { Actions } from 'react-native-router-flux';
var Spinner = require('react-native-spinkit');

class TopRatedMovies extends Component {

    constructor(props){
        super(props);
        this.state = { dataSource: []}
        this.page = 1;
     }

    
    componentWillMount(){
        this.props.firstTime();
    }

    
    componentWillReceiveProps(newProps){
        if(newProps.listMovie != this.props.listMovie){
            
            if(newProps.listMovie.length > 0){
                this.setState({ dataSource: this.state.dataSource.concat(newProps.listMovie) })
            }else{
                this.setState({ dataSource: [] })
            }
            
        } 
     }

     loadMoreData = () => {
        this.page = this.page + 1;
        this.props.loadmore(this.page);

    };

     renderButtonLoadMore() {
        if(!this.props.loading && this.props.listMovie.length > 0) {
            return (
                <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={this.loadMoreData}
                        //On Click of button calling loadMoreData function to load more data
                        style={styles.loadMoreBtn}>
                        <Text style={styles.loadmoreBtnText}>Load More</Text>
                        {this.props.loadingLoadmore ? (
                        <ActivityIndicator color={color.white} style={{ marginLeft: 8 }} />
                        ) : null}
              </TouchableOpacity>
            );
        }
    }

     renderFooter() {
        return (
        //Footer View with Load More button
          <View style={styles.footer}>

                {this.renderButtonLoadMore()} 

          </View>
        );
      }

    render() {
        return (
            <View style={styles.containerMovies}>

                 <Spinner 
                            style={styles.spinnerKotak} 
                            isVisible={this.props.loading}
                            size={100}
                            type='Wave'
                            color={color.green}
                />
                
                <FlatList
                            data={this.state.dataSource}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                            
                           
                            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                                <TouchableOpacity onPress={() => Actions.detailMovie({posterPath: hostImg+item.posterPath, title: item.title, originalTitle: item.originalTitle, voteAverage: item.voteAverage, overview: item.overview, releaseDate: item.releaseDate})}>
                                <ImageBackground style={styles.imageThumbnail} source={{ uri: hostImg+item.posterPath }} >
                                
                               </ImageBackground>
                               </TouchableOpacity>
                            </View>
                            
                            
                            }
                            //Setting the number of column
                            numColumns={2}
                            ListFooterComponent={this.renderFooter.bind(this)}
                            //Adding Load More button as footer component
                            keyExtractor={item => ""+item.id}
                    />

            </View>
        );
    }
}



const mapStateToProps = ({ topRatedMovie }) => {          
    const { listMovie, error, loading, loadingLoadmore } = topRatedMovie;

    return { listMovie, error, loading, loadingLoadmore };
};

export default connect(mapStateToProps, { loadmore, firstTime }) (TopRatedMovies);