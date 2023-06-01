import React from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import GameItem from "./GameItem";

class GamesList extends React.Component {
    constructor(props) {
        super(props);
        this.page = 1
    }

    render() {
        return (
            <View>
                <FlatList
                    style={styles.list}
                    data={this.props.games}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <GameItem game={item} navigation={this.props.navigation}/>}
                ></FlatList>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default GamesList;