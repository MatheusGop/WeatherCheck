import Repository from './repository';

const appid = 'eaac9e2fada58225beca76b25a9f473a'

// eslint-disable-next-line
export default {
    getWeatherInformation(cityName) {
        return Repository.get(`?q=${cityName}&units=metric&lang=pt_br&appid=${appid}`)
    }
}
