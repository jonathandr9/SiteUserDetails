import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';


export default class User extends Component {

    state = {
        user: {},
        address: {},
        company: {}
    }

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api.get(`/users/${id}`);

        this.setState({
            user: response.data,
            address: response.data.address,
            company: response.data.company
        });
    }

    render() {

        const { user } = this.state;
        // const {address} = this.state.address;

        return (
            <div className="user-info">
                <h1>{user.id}</h1>
                <p><b>Nome:</b> {user.name}</p>
                <p><b>Usuário:</b> {user.username}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Endereço:</b> Street {`${this.state.address.street},
                                  ${this.state.address.suite}.
                                  ${this.state.address.city} -
                                  ${this.state.address.zipcode}`}</p>
                <p><b>Telefone:</b> {user.phone}</p>
                <p><b>Website:</b> {user.website}</p>
                <p><b>Company:</b> {this.state.company.name}</p>

            </div>


        )
    }

}