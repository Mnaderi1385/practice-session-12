import React from 'react';
import '../style.css';
import Title from './Title.jsx';
import Timer from './Timer.jsx';

document.body.classList = 'bg-gray-800 selection:bg-blue-800 selection:text-white';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'تایمر:',
        };
    };

    updateStateTitle = () => {
        this.setState({
            title: 'این دوره ریکت کد یاد است'
        })
    };

    render(){
        return (
            <div className="flex justify-center items-center min-h-screen flex-col">
                <Title title={this.state.title} />
                <Timer updateStateTitle={this.updateStateTitle} />
            </div>
        );
    };
    
};

export default App;