import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { logout  } from '../../Services/ApiServices'
import authService from '../../Services/AuthService';
class Home extends Component {
    async componentDidMount() {
        await logout()
    }
    render() {
        return (
            <div>
                <LoginForm/>
            </div>
        );
    }
}

export default Home;