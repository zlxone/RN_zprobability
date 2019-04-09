import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import BouncingBalls from 'react-native-bouncing-ball'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    start() {
        alert('798')
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../images/bg.jpg')}>
                <BouncingBalls
                    amount={10}
                    animationDuration={5000}
                    minSpeed={30}
                    maxSpeed={200}
                    minSize={40}
                    maxSize={100}
                    style={{
                        backgroundColor: 'rgba(205, 255, 205, 0.3)'
                    }}
                />

                <TouchableOpacity activeOpacity={0.9}
                    onPress={() => { this.start() }}
                    style={{
                        paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, borderRadius: 6,
                        marginBottom: 20, backgroundColor: 'white'
                    }}>
                    <Text style={{ fontSize: 20 }}>开始</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

});
