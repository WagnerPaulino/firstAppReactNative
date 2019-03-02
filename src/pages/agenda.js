import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Agenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agendas: this.props.getAgendas().data || []
        };

    }
    
    componentDidMount() {}
    
    render() {
        console.log(this.state);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to My App!</Text>
                <Button title="Agenda"></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = (state) => {
    return {}
  };
  
export default connect(mapStateToProps, actions)(Agenda);