export interface CityWeather {
    name: string
    clouds: number,
    humidity: number,
    temp: string,
    description: string,
    wind: number,
    default: boolean
};

export interface IncomeData {
    name: string,
    clouds: {
        all: number
    },
    main: {
        humidity: number,
        temp: number,
    },
    weather: [{
        description: string
    }],
    wind: {
        speed: number
    }
}
