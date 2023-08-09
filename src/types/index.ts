export interface ITodayWeather {
  datetime: string;
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  feelslike: number;
  dew: number;
  humidity: number;
  precip: number;
  precipprob: number;
  precipcover: number;
  preciptype: string[] | null;
  snow: number;
  snowdepth: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  cloudcover: number;
  visibility: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  stations: null;
  source: string;
}

export interface IWeatherData {
  queryCost?: number;
  latitude?: number;
  longitude?: number;
  resolvedAddress?: string;
  address?: string;
  timezone?: string;
  tzoffset?: number;
  days?: ITodayWeather[];
}

interface IHourData {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: string | null;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  conditions: string;
  icon: string;
  stations: string[] | null;
  source: string;
}

interface ICurrentWeather {
  datetime: string;
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  feelslike: number;
  dew: number;
  humidity: number;
  precip: number;
  precipprob: number;
  precipcover: number;
  preciptype: string | null;
  snow: number;
  snowdepth: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  cloudcover: number;
  visibility: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  stations: string[];
  source: string;
  hours: IHourData[];
}

export interface ILocationTodayWeather {
  queryCost?: number;
  latitude?: number;
  longitude?: number;
  resolvedAddress?: string;
  address?: string;
  timezone?: string;
  tzoffset?: number;
  description?: string;
  days?: ICurrentWeather[];
  alerts?: string[];
  stations?: {
    [key: string]: {
      distance: number;
      latitude: number;
      longitude: number;
      useCount: number;
      id: string;
      name: string;
      quality: number;
      contribution: number;
    };
  };
  currentConditions?: IHourData & {
    sunrise: string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    moonphase: number;
  };
}
