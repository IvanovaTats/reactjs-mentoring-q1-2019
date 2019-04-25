import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import MainMenu from './components/mainMenuPage/mainMenu'

class App extends React.Component {

    render() {
        return (
            <div>
                <MainMenu />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
