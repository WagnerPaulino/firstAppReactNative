import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Agenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agendas: this.props.getAgendas().data || []
        };

    }

    componentDidMount() { }
    componentWillReceiveProps(newProps){

    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <View style={styles.container}>
                {
                    this.state.agendas.map((l, i) => (
                        <TouchableHighlight onPress={() => { }} key={i}>
                            <View>
                                <Text onPress={(e) => { e }} style={styles.welcome}>
                                    {l.nome}
                                </Text>
                                <Button title="Excluir" onPress={() => this.props.deleteAgenda(l)} />
                            </View>
                        </TouchableHighlight>
                    ))
                }
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
    return {
        agenda: state
    }
};

export default connect(mapStateToProps, actions)(Agenda);