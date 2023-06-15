import React from 'react';

class UserData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: '',
            selectedOption: '',
            fruits: [],
        };
    }

    handleGenderChange = (event) => {
        this.setState({ gender: event.target.value });
    }

    handleOptionChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    }

    handleFruitChange = (event) => {
        const selectedFruits = [...this.state.fruits];
        const value = event.target.value;
        if (event.target.checked) {
            selectedFruits.push(value);
        } else {
            const index = selectedFruits.indexOf(value);
            if (index !== -1) {
                selectedFruits.splice(index, 1);
            }
        }
        this.setState({ fruits: selectedFruits });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    // Handle form submission
        console.log('Gender:', this.state.gender);
        console.log('Selected option:', this.state.selectedOption);
        console.log('Selected fruits:', this.state.fruits);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text" />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number" />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email" />
                <div>
                    <label htmlFor="male">
                        <input
                            type="radio"
                            value="male"
                            checked={this.state.gender === 'male'}
                            onChange={this.handleGenderChange} />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input
                            type="radio"
                            value="female"
                            checked={this.state.gender === 'female'}
                            onChange={this.handleGenderChange} />
                        Female
                    </label>
                </div>
                <div>
                    <label htmlFor="dropdown">
                        Dropdown:
                        <select value={this.state.selectedOption} onChange={this.handleOptionChange}>
                            <option value="Magadan">Magadan</option>
                            <option value="Kolyma">Kolyma</option>
                            <option value="Norilsk">Norilsk</option>
                            <option value="Nizhnevartovsk">Nizhnevartovsk</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="vegan">
                        <input
                            type="checkbox"
                            value="vegan"
                            checked={this.state.fruits.includes('vegan')}
                            onChange={this.handleFruitChange} />
                        vegan
                    </label>
                    <label htmlFor="no nuts">
                        <input
                            type="checkbox"
                            value="nuts"
                            checked={this.state.fruits.includes('nuts')}
                            onChange={this.handleFruitChange} />
                        Nuts
                    </label>
                    <label htmlFor="glutenfree">
                        <input
                            type="checkbox"
                            value="glutenfree"
                            checked={this.state.fruits.includes('glutenfree')}
                            onChange={this.handleFruitChange} />
                        glutenfree
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default UserData;

