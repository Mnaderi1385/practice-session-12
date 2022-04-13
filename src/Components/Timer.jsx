import React from "react";
import '../style.css';

let interval;
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 20,
        };
    };

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(interval);
        };
    };
    
    startTimer = () => {
        interval = setInterval(() => {
            this.setState({
                timer: this.state.timer - 1,
            });
        }, 1000);
    };

    stopTimer = () => {
        clearInterval(interval);
    };

    render() {
        return(
            <>
                <p className="text-center text-gray-100 text-2xl mt-4 animate-pulse shadow-md shadow-slate-900 flex justify-center items-center w-48 py-3 px-7 rounded-lg mx-auto" dir="ltr">{this.state.timer}</p>
                <div className="">
                    <button type="button" className="bg-slate-900 text-white px-4 py-3 text-sm rounded-md mt-5 ml-3" onClick={this.startTimer}>شروع</button>
                    <button type="button" className="bg-slate-900 text-white px-4 py-3 text-sm rounded-md mt-5 ml-3" onClick={this.stopTimer}>پایان</button>
                </div>
            </>
        );
    };
}

export default Timer;