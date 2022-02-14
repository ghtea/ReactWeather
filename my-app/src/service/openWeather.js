class OpenWeather {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        this.loc = "incheon";
    }

    async getTodayWeather() {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.loc}&appid=${this.key}&units=metric\n`, this.requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));

        return result;
    }
}

export default OpenWeather;