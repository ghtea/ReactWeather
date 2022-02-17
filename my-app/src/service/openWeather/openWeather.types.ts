
export type Location = {
  lat: number;
  lon: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Tempertature = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};