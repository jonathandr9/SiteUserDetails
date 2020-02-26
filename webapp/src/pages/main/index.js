import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';

export default class Main extends Component {

    state = {
        users: [],
        usersInfo: {},
        page: 1
    }

    componentDidMount() {
        this.loadUsers();
    };

    loadUsers = async (page = 1) => {

        console.log(`/users?_start=${(page*5)-5}&_end=${page*5}`);

        const responseAll = await api.get('/users')
    
        const response = await api.get(`/users?_start=${(page*5)-5}&_end=${page*5}`);    

        this.setState({ 
            users: response.data, 
            usersInfo: {
                totalPages: Math.ceil(responseAll.data.length / 5)
            }, 
            page: page
        });


    };

    prevPage = () => {

        const {page, usersInfo} = this.state;

        if(page === 1){
            return;
        }

        const pageNumber = page - 1;

        this.loadUsers(pageNumber);

    };

    nextPage = () => {
        const {page, usersInfo} = this.state;

        if(page === usersInfo.totalPages){
            return;
        }

        const pageNumber = page + 1;

        this.loadUsers(pageNumber);
    };

    render() {

        const { users, page, usersInfo } = this.state;

        return (
            <div className='users-list'>
                {users.map(user => (
                    <article key={user.id}>
                        <strong>Id: {user.id}</strong>
                        <p><b>Nome:</b> {user.name.split(' ')[0]}</p>
                        <p><b>Sobrenome:</b> {user.name.split(' ')[1]}</p>
                        <p><b>Email:</b> {user.email}</p>

                        <Link to={`/users/${user.id}`}>Detalhes</Link>
                    </article>
                ))};
                <div className='actions'>
                    <button disabled={page ===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === usersInfo.totalPages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}