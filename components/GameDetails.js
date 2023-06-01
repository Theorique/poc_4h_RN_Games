import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View, ScrollView} from "react-native";
import {getGameDetail} from "../API/apiTools";

class GameDetails extends React.Component {
    game;

    constructor(props) {
        super(props);
        this.state = {isLoading: false};
        this.game = {};
    }

    componentDidMount() {
        this.loadDataGame();
    }

    loadDataGame() {
        this.setState({isLoading: true});
        getGameDetail(this.props.route.params.idGame).then((data) => {
            this.game = data;
            /*this.game.description = this.getGameDescriptions(this.game.description);*/
            this.setState({isLoading: false});
        })
    }

    /*getGameDescriptions(desc) {
        console.log("desc",desc)
        let newDesc = desc.split("<p>")[1];
        console.log("new", newDesc);
        return newDesc;
    }*/

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
                    <ScrollView style={{width: "100%"}}>
                        <View style={{ alignItems: "center" }}>
                            <Image
                                style={{width: 200, height: 200}}
                                source={{uri: this.game.background_image}}
                            />
                            <Text>{this.game.name}</Text>
                            <Text>{this.game.released}</Text>
                            <Text>{this.game.rating} / 5</Text>
                            <Text>{this.game.description}</Text>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
};

const styles = StyleSheet.create({
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

export default GameDetails;