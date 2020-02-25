import React from 'react';
import './App.scss';
import Form from './components/Form';
import Wrapper from './components/Wrapper';
import Ticket from './components/Ticket';

class App extends React.Component {

    state = {
        // State of inputs of the form
        inputTitle: '',
        inputLogoUrl: '',
        inputDate: '',
        inputQuantity: 0,
        inputDescription: '',
        quantity: 0,
        textarea: '',

        // State of form and preview mode
        isFormSubmited: false,
        isPreviewMode: true
    }

    // Function that pull values from Form Component
    onInputsChange = (id, value) => {
        if(this.state.hasOwnProperty(id)) {
            this.setState({[id]: value})
        }
    }

    // Function that change the state of the Form Component
    onFormSubmit = (quantity) => {
        this.setState( state => ({
            quantity: quantity,
            isFormSubmited: !state.isFormSubmited,
            isPreviewMode: !state.isPreviewMode
        }));
    }

    // Function that go back to preview mode
    onBtnClick = () => {
        this.setState( state => ({
            isFormSubmited: !state.isFormSubmited,
            isPreviewMode: !state.isPreviewMode
        }));
    }

    // Function that push state onto Form Component
    onFormInitialize = () => {
        return this.state;
    }

    // Function that generate tickets from the amount given 
    generateTickets() {
        var wrappers = [];
        var counter = 1;
        
        // If quantity is empty
        if( !this.state.quantity || this.state.isPreviewMode ) {

            wrappers.push(
                <Wrapper key="0">
                    <Ticket 
                    logo_url={this.state.inputLogoUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W'}
                    title = {this.state.inputTitle || 'TITLE'}
                    description = {this.state.textarea || 'Here is the ticket description'}
                    date = {this.state.inputDate || '01.01.2020'}
                    code = {'0001'}
                    />
                </Wrapper>              
            );

        } else {
            for (let i = 0; i < this.state.quantity / 6; i++) {
                let tickets = []; // Empty array that store the tickets generated

                for (let j = 0; j < 6 && counter <= this.state.quantity; j++) {
                    // Formating code
                    let code = '0000';
                    let tmpString = '' + counter;
                    code = code.slice(tmpString.length) + tmpString;
                    //--------------

                    tickets.push(
                        <Ticket 
                            logo_url={this.state.inputLogoUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W'}
                            title = {this.state.inputTitle || 'TITLE'}
                            description = {this.state.textarea || 'Here is the ticket description'}
                            date = {this.state.inputDate || '01.01.2020'}
                            code = {code || '0000'}
                            key={counter}
                        />
                    );

                    counter++;
                }

                wrappers.push(
                    <Wrapper key={i}>
                        {tickets}
                    </Wrapper>
                )
            }
        }

        return wrappers
    }   

    render() {
        return (
            <div className="App">
                <h1 className="text-center">Ticket Generator</h1>
                { ( this.state.isFormSubmited ) ? (
                    <div className="text-center hide-on-print" style = {{marginBottom: "2rem"}}>
                        <button className="btn" onClick={this.onBtnClick}>
                            Back to edit
                        </button>
                    </div>
                ) : (
                    <Form
                        onInputsChange = {this.onInputsChange}
                        onFormSubmit = {this.onFormSubmit} 
                        onFormInitialize = {this.onFormInitialize}   
                    />
                )}
                <section className="tickets">
                    {this.generateTickets()}
                </section>
            </div>
        );
    }

}

export default App;
