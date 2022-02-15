class OpenWeather {
    private requestOptions;
    private loc;

    constructor(private key: string) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        this.loc = "incheon";
    }

    async getTodayWeather<T>(): Promise<T> {
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.loc}&appid=${this.key}&units=metric\n`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json() as Promise<T>
            })
    }
}

export default OpenWeather;