import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";

class GameItem extends React.Component {
    constructor(props) {
        super(props);
    }

    goToDetail() {
        this.props.navigation.navigate('GameDetails', {idGame: this.props.game.id});
    }
    render() {
        const {game} = this.props;
        return (
            <View>
                <TouchableOpacity onPress={() => this.goToDetail()}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri:game.background_image}}
                />
                <Text>{game.name}</Text>
                <Text>{game.released}</Text>
                <Text>{game.rating} / 5</Text>
            </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: "2%",
    },
    upDetail: {
        textAlign: "center",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "2%",
    },
    tinyImg: {
        width: 100,
        height: 170,
    },
    title: {
        fontSize: 20,
        textDecorationLine: "underline",
        textAlign: 'center',
    },
    titleNoSaleLink: {
        fontSize: 20,
        textAlign: 'center',
    },
});

export default GameItem;