type location = {
    lat: number;
    lon: number;
};

class OpenWeather {
    private requestOptions;

    constructor(private key: string) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async getTodayWeather<T>(userLocation: location): Promise<T> {
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${this.key}&units=metric\n`)
            .then(response => {
                if (!response.ok) {
                    alert(`Please select a valid value.`);
                    throw new Error(response.statusText);
                }
                return response.json() as Promise<T>;
            })
    }

    async getLatAndLon<T>(userLocation: string): Promise<T> {
        return await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userLocation}&limit=5&appid=${this.key}`)//
            .then(response => {
                if (!response.ok) {
                    alert(`Please input a valid location.`);
                    throw new Error(response.statusText);
                }
                return response.json() as Promise<T>;
            })
    }
}

export default OpenWeather;