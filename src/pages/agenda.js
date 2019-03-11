import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Agenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agenda: this.props.getAgendas().data || []
        };
        this.deleteAgenda = this.deleteAgenda.bind(this)
    }

    deleteAgenda(id){
        this.props.deleteAgenda(id)
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.agenda.map((l, i) => (
                        <TouchableHighlight onPress={() => { }} key={i}>
                            <View>
                                <Text onPress={(e) => { e }} style={styles.welcome}>
                                    {l.nome}
                                </Text>
                                <Button title="Excluir" onPress={()=> this.deleteAgenda(l.id)} />
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
    console.log(state);
    return {agenda: state.agenda};
};

export default connect(mapStateToProps, actions)(Agenda);