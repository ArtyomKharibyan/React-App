import './App.css';
import React from "react";
import Button from '@mui/material/Button';
import ItemList from './components/ItemList';
import TextField from '@mui/material/TextField';
import { v4 } from 'uuid';


class App extends React.Component {
    state = {
        inputValue: '',
        items: [],
    };

    onChange = (e) => {
        this.setState({inputValue: e.target.value})
    }
    addItem = () => {
        this.setState({items: this.state.items.concat({item: this.state.inputValue, id: v4()})});
        this.setState({inputValue: ''});
    }
    removeItem = (id) => {
        this.setState({items: this.state.items.filter((elem) => elem.id !== id)});
    }

    render() {
        return (
            <div className="App">
                <p className="text">MY TODO LIST</p>
                <div>
                    <TextField className = "textfield" value={this.state.inputValue} onChange={this.onChange} id="outlined-basic" label="Outlined" variant="outlined" />
                    <Button className = "add" variant="outlined" onClick={this.addItem}>Add</Button>
                </div>
                <ul>
                    {this.state.items.map((elem) =>{
                        return <ItemList key={elem.id} data={elem} removeItem={this.removeItem}/>
                    })}
                </ul>
            </div>
        );
    }
}

export default App;