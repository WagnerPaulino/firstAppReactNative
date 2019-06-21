import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agenda: {
                nome: '',
                horario: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.agenda = this.state.agenda;
    }

    handleSubmit() {
        this.setState({ agenda: this.agenda })
        this.props.addAgenda(this.state.agenda);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Tarefa' onChangeText={(e) => this.agenda.nome = e}></TextInput>
                <TextInput placeholder='Horario' onChangeText={(e) => this.agenda.horario = e}></TextInput>
                <Button
                    title="Salvar"
                    onPress={this.handleSubmit}
                />
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
    return { ...state.agenda };
};

export default connect(mapStateToProps, actions)(Edit);