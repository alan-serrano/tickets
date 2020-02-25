import React from 'react';
import './Form.scss';

class Form extends React.Component {

    state = {
        inputTitle: '',
        inputLogoUrl: '',
        inputDate: '',
        inputQuantity: '',
        inputDescription: '',
        inputStartNo: '',
        textarea: ''
    };

    onInputChange = (e) => {
        const {target: {id, value}} = e;

        this.setState({
            [id]: value
        });

        this.props.onInputsChange(id, value);
    }

    // Function that push, on submit, the quantity to App Component
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.inputQuantity);
    }

    // If App Component has a previus state of Form, mount it with that state
    componentWillMount() {
        // Creating an empty object to store the state of App Component
        const state = {};

        //State of App component
        const stateAppComponent = this.props.onFormInitialize()

        //Filtering keys that have this state of the Form component
        for (const key in stateAppComponent) {
            if (this.state.hasOwnProperty(key)) {
                state[key] = stateAppComponent[key]
            }
        }
        
        this.setState(state);
    }

    render() {
        return(
            <section className="form">
                <div className="container">
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="inputTitle">Title</label>
                                <input className="form-control" type="text" onChange={this.onInputChange} value={this.state.inputTitle}  id="inputTitle" />
                            </div>
    
                            <div className="form-group col">
                                <label htmlFor="inputLogoUrl">Logo Url</label>
                                <input className="form-control" type="text" id="inputLogoUrl"
                                    onChange={this.onInputChange} value={this.state.inputLogoUrl}
                                />
                            </div>
        
                        </div>

                        <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="inputDate">Date</label>
                                <input className="form-control" type="text" id="inputDate" 
                                    onChange={this.onInputChange} value={this.state.inputDate}
                                />
                            </div>
    
                            <div className="form-group col">
                                <label htmlFor="inputStartNo">Start at N°</label>
                                <input className="form-control" type="number" min="1" id="inputStartNo"
                                    onChange={this.onInputChange} value={this.state.inputStartNo}
                                />
                            </div>
    
                            <div className="form-group col">
                                <label htmlFor="inputQuantity">Quantity</label>
                                <input className="form-control" type="number" min="1" id="inputQuantity"
                                    onChange={this.onInputChange} value={this.state.inputQuantity}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="textarea">Description</label>
                            <textarea className="form-control" rows="4" id="textarea"
                                 onChange={this.onInputChange} value={this.state.textarea}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Generate</button>
                    </form>
                </div>
            </section>
        ); 
    }
}

export default Form;