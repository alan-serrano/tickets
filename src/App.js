import React from 'react';
import './App.scss';
import Form from './components/form';
import Wrapper from './components/wrapper';
import Ticket from './components/ticket';

class App extends React.Component {
    render() {

        return (
            <div className="App">
                <h1 className="text-center">Ticket Generator</h1>
                <Form />
                <Wrapper>
                    <Ticket
                        logo_url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W"
                        title = "TITLE"
                        description = "Here is the ticket description"
                        date = "01.01.2020"
                        code = "000000"
                    />
                    <Ticket
                        logo_url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W"
                        title = "TITLE"
                        description = "Here is the ticket description"
                        date = "01.01.2020"
                        code = "000000"
                    />
                    <Ticket
                        logo_url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W"
                        title = "TITLE"
                        description = "Here is the ticket description"
                        date = "01.01.2020"
                        code = "000000"
                    />
                    <Ticket
                        logo_url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W"
                        title = "TITLE"
                        description = "Here is the ticket description"
                        date = "01.01.2020"
                        code = "000000"
                    />
                    <Ticket
                        logo_url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W"
                        title = "TITLE"
                        description = "Here is the ticket description"
                        date = "01.01.2020"
                        code = "000000"
                    />
                    <Ticket
                        logo_url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDK5X2Sjws2k1i6rKJHnO1mnDBtg2AFruxmBjZHbvATgc1b8_W"
                        title = "TITLE"
                        description = "Here is the ticket description"
                        date = "01.01.2020"
                        code = "000000"
                    />
                </Wrapper>
            </div>
        );
    }

}

export default App;
