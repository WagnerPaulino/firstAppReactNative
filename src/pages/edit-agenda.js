import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const Form = t.form.Form;


class EditAgenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agenda: {
                nome: '',
                horario: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        this.props.addAgenda(this.state.agenda);
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
    console.log('maptoprops');
    console.log(state);
    return { ...state.agenda };
};

export default connect(mapStateToProps, actions)(EditAgenda);