import  React from 'react';
const api = {
    key:"6467501b782ae6f7272562fb2b49a51a",
    base:"https://api.openweathermap.org/data/2.5"
}

function Home () {
    
const datebuilder = (d) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    let day = days[d.getDay ()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day} ${date} ${year}`

}

    return (
        <div className="main">
            <p><b>WELCOME TO THE WEATHER'S HOME </b></p>

            <input type="text" placeholder="Search location here" />
            <button class="btn btn-secondary">Search</button>

            <p className="state">Accra Today</p>
            <div className="date">{datebuilder(new Date())}</div>
            <img src="https://www.fox8live.com/pb/resources/images/weather/weather-condition-icons/400x400/102_daily_forecast.png"
             width="100" alt="" />
             <p><b>28<sup>o</sup>c</b></p>
            
            </div>
    );
}

export default Home;