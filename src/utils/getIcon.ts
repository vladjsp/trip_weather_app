import { weatherIcons } from '../assets/icons';

export const getIcon = (icon: string): string => {
  switch (icon) {
    case 'partly-cloudy-day' || 'partly-cloudy-night':
      return weatherIcons.partlyCloudyDay;
    case 'cloudy':
      return weatherIcons.cloudy;
    case 'clear-day' || 'clear-night':
      return weatherIcons.clearDay;
    case 'fog':
      return weatherIcons.fog;
    case 'snow':
      return weatherIcons.snow;
    case 'rain':
      return weatherIcons.rain;
    case 'hail':
      return weatherIcons.hail;
    case 'wind':
      return weatherIcons.wind;
    case 'thunder':
      return weatherIcons.thunder;
    case 'thunder-rain':
      return weatherIcons.thunderRain;
    case 'sleet':
      return weatherIcons.sleet;
    case 'showers-day' || 'showers-night':
      return weatherIcons.showersDay;

    default:
      return weatherIcons.clearDay;
  }
};
