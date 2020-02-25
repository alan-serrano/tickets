import React from 'react';
import './Form.scss';

class Form extends React.Component {

    state = {
        inputTitle: '',
        inputLogoUrl: '',
        inputDate: '',
        inputQuantity: '',
        inputDescription: '',
        textarea: ''
    };

    onInputChange = (e) => {
        const {target: {id, value}} = e;

        this.setState({
            [id]: value
        });

        this.props.onInputsChange(id, value);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.inputQuantity);
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