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
                <View style={{ alignItems: 'flex-end', }}>
                    <TouchableOpacity activeOpacity={1}
                        style={[{ padding: 4, marginTop: 20, flexDirection: 'row', borderWidth: 1, borderColor: '#f8f5d6' }]}>
                        <View style={{ marginRight: 8 }}>
                            <Text style={{ marginBottom: 6, height: 16 }}>预测</Text>
                            <Text style={{ marginBottom: 6 }}>分数:100</Text>
                            <Text style={{ marginBottom: 6 }}>次数:100</Text>
                            <Text style={{}}>记录:100</Text>
                        </View>
                        <View>
                            <Text style={{ marginBottom: 6, height: 16 }}>AI预测</Text>
                            <Text style={{ marginBottom: 6 }}>分数:100</Text>
                            <Text style={{ marginBottom: 6 }}>次数:100</Text>
                            <Text style={{}}>记录:100</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[{ flex: 1 }, styles.pstyle]}>
                    <Text>99999999</Text>
                </View>
                <View style={[styles.pstyle]}>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={() => { this.start() }}
                        style={[{
                            height: 40, width: 80, borderRadius: 6, marginBottom: 20, backgroundColor: 'white'
                        }, styles.pstyle]}>
                        <Text style={{ fontSize: 20 }}>开始</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pstyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
