import React from "react";
import Elements from "./Components/Elements";
import "./App.css";

class App extends React.Component {
    days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    constructor() {
        super();
        const time = new Date();

        this.state = {
            year: time.getFullYear(),
            // month: time.toLocaleString("en", {
            //     month: "short"
            // }),
            monthName: this.months[time.getMonth()],
            monthNbr: time.getMonth(),
            date: time.getDate(),
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds(),
            dayName: this.days[time.getDay()],
            dayNbr: time.getDay()
        };
    }

    componentDidMount() {
        const tick = () => {
            let thisInstant = new Date();
            this.setState({
                year: thisInstant.getFullYear(),
                // month: thisInstant.toLocaleString("en", {
                //     month: "short"
                // }),
                monthName: this.months[thisInstant.getMonth()],
                monthNbr: thisInstant.getMonth(),
                date: thisInstant.getDate(),
                hour: thisInstant.getHours(),
                minute: thisInstant.getMinutes(),
                second: thisInstant.getSeconds(),
                dayName: this.days[thisInstant.getDay()],
                dayNbr: thisInstant.getDay()
            });
        };
        setInterval(tick, 1000);
    }

    render() {
        const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
        const nbrOfHours = 24;
        const nbrOfMinutes = 60;
        const nbrOfSeconds = 60;

        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return (
            <div className="container">
                <div className="year">
                    <p>{this.state.year}</p>
                </div>
                <div className="months">
                    <Elements
                        toCompare={this.state.monthNbr}
                        elements={months}
                        type="month"
                    />
                </div>
                <div className="days">
                    <Elements
                        toCompare={this.state.dayNbr}
                        elements={days}
                        type="day"
                    />
                </div>
                <div className="dates">
                    <Elements
                        toCompare={this.state.date}
                        quantity={daysInMonth(
                            this.state.year,
                            this.state.monthNbr + 1
                        )}
                        type="date"
                        unit="th"
                    />
                </div>
                <div className="hours">
                    <Elements
                        toCompare={this.state.hour}
                        quantity={nbrOfHours}
                        type="hour"
                        unit="h"
                    />
                </div>
                <div className="minutes">
                    <Elements
                        toCompare={this.state.minute}
                        quantity={nbrOfMinutes}
                        type="minute"
                        unit="m"
                    />
                </div>
                <div className="seconds">
                    <Elements
                        toCompare={this.state.second}
                        quantity={nbrOfSeconds}
                        type="second"
                        unit="s"
                    />
                </div>
            </div>
        );
    }
}

export default App;
