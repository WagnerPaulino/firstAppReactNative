import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class EditAgenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agenda: {}
        };
    }

    componentWillMount() {
        console.log('Will mount')
        console.log(this.state);
    }

    componentWillReceiveProps(newProps) {
        console.log('Receive Props')
        console.log(newProps.agenda);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => console.log('apertado')} title="Salvar"></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = (state) => {
    console.log('maptoprops');
    console.log(state);
    return { ...state.agenda };
};

export default connect(mapStateToProps, actions)(EditAgenda);