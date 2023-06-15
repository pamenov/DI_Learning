import React, { Component } from 'react';
import './App.css';
import UserData from './UserData';

class FormComponent extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const inputs = event.target.getElementsByTagName('input');
        for (const item of inputs) {
            console.log(item.value);
        }
    }

    render() {
        return (
            <div className="box" >
                <UserData handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}


export default FormComponent;
