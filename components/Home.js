import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {loadGames} from "../API/apiTools";
import GamesList from "./GamesList";
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.navigation = props.navigation
        console.log('props', this.navigation);
        this.state = {
            games: [],
            isLoading: false,
        };
        this._loadGames = this._loadGames.bind(this);
    }

    componentDidMount() {
        this._loadGames()
    }

    _loadGames() {
        this.setState({isLoading: true})
        loadGames(this.page).then(data => {
            this.setState({
                /*games: [...this.state.games, ...data.results],*/
                games: data.results,
                isLoading: false
            });
        });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            );
        } else {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <GamesList games={this.state.games} navigation={this.navigation}></GamesList>
                </View>
            );
        }
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
export default Home;