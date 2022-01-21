import './App.css';
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [
                {
                    name: 'Frankenstein',
                    id: 'asc1'
                },
                {
                    name: 'Dracula',
                    id: 'asr2'
                },
                {
                    name: 'Zombie',
                    id: 'asw3'
                },
            ]
        }
    }

    render() {
        return (
            <div className="App">
                {this.state.monsters.map(monster => (
                    <h1 key={monster.id}> {monster.name} </h1>
                ))}
            </div>
        );
    }
}

export default App;
