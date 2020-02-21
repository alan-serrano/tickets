import React from 'react';
import './form.scss';

class Form extends React.Component {

    render() {

        return(
            <section className="form">
                <div className="container">
                    <form>
                        <div className="form-row">
                            <div className="form-group col">
                                <label for="input-title">Title</label>
                                <input class="form-control" type="text" id="input-title" />
                            </div>
    
                            <div className="form-group col">
                                <label for="input-title">Logo Url</label>
                                <input class="form-control" type="text" id="input-title" />
                            </div>
        
                        </div>

                        <div className="form-row">
                            <div className="form-group col">
                                <label for="input-date">Date</label>
                                <input class="form-control" type="text" id="input-date" />
                            </div>
    
                            <div className="form-group col">
                                <label for="input-number">Quantity</label>
                                <input class="form-control" type="number" min="0" id="input-number"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="textarea-description">Description</label>
                            <textarea class="form-control" rows="4" id="textarea-description"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                </div>
            </section>
        ); 
    }
}

export default Form;