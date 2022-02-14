class OpenWeather {
    constructor() {
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        this.loc = "incheon"
    }

    async getTodayWeather() {
        const result = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.loc}&appid=${process.env.REACT_APP_OPENWEATHER_APPID}&units=metric\n`, this.requestOptions);
        return result.json();
    }
}

export default OpenWeather;