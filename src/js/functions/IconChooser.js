const iconChooser = (weather) => {
	switch (weather) {
		case '01d':
			return 'wi-day-sunny';
		case '02d':
			return 'wi-day-cloudy';
		case '03d':
			return 'wi-cloud';
		case '04d':
			return 'wi-cloudy';
		case '09d':
			return 'wi-showers';
		case '10d':
			return 'wi-day-showers';
		case '11d':
			return 'wi-thunderstorm';
		case '13d':
			return 'wi-snow';
		case '50d':
			return 'wi-windy';
		case '01n':
			return 'wi-night-clear';
		case '02n':
			return 'wi-night-alt-cloudy';
		case '03n':
			return 'wi-cloud';
		case '04n':
			return 'wi-cloudy';
		case '09n':
			return 'wi-showers';
		case '10n':
			return 'wi-night-alt-showers';
		case '11n':
			return 'wi-thunderstorm';
		case '13n':
			return 'wi-snow';
		case '50n':
			return 'wi-windy';
	}
};
export default iconChooser;
