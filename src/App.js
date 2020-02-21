import React from 'react';
import './App.scss';
import Form from './components/form';
import Wrapper from './components/wrapper';
import Ticket from './components/ticket';

class App extends React.Component {

    state = {
        inputTitle: '',
        inputLogoUrl: '',
        inputDate: '',
        inputQuantity: 0,
        inputDescription: '',
        code: 0,
        quantity: 1,
        textarea: ''
    }

    onInputsChange = (id, value) => {
        if(this.state.hasOwnProperty(id)) {
            this.setState({[id]: value})
        }
    }

    onFormSubmit = (quantity) => {
        this.setState({quantity: quantity})
    }

    tickets() {
        var tmp = [];

        // If quantity is empty
        if( !this.state.quantity ) {
            tmp.push(
                <Ticket 
                    logo_url={this.state.inputLogoUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W'}
                    title = {this.state.inputTitle || 'TITLE'}
                    description = {this.state.textarea || 'Here is the ticket description'}
                    date = {this.state.inputDate || '01.01.2020'}
                    code = {this.state.code || '0000'}
                />
            );

        } else {
            for (let i = 0; i < this.state.quantity; i++) {
                tmp.push(
                    <Ticket 
                        logo_url={this.state.inputLogoUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W'}
                        title = {this.state.inputTitle || 'TITLE'}
                        description = {this.state.textarea || 'Here is the ticket description'}
                        date = {this.state.inputDate || '01.01.2020'}
                        code = {this.state.code || '0000'}
                        key={i}
                    />
                );
            }
        }


        return tmp
    }   

    render() {
        return (
            <div className="App">
                <h1 className="text-center">Ticket Generator</h1>
                <Form 
                    onInputsChange = {this.onInputsChange}
                    onFormSubmit = {this.onFormSubmit}    
                />
                <Wrapper>
                    {this.tickets()}
                </Wrapper>
            </div>
        );
    }

}

export default App;
