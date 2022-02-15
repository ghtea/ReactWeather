class OpenWeather {
    private requestOptions;

    constructor(private key: string) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async getTodayWeather<T>(userLocation: string): Promise<T> {
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${this.key}&units=metric\n`)
            .then(response => {
                if (!response.ok) {
                    alert(`Please select a valid value.`);
                    throw new Error(response.statusText)
                }
                return response.json() as Promise<T>
            })
    }
}

export default OpenWeather;