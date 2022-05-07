import fetchWeather from './WeatherFetch';

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const search = (e) => {
	e.preventDefault();
	const value = searchInput.value;
	searchInput.value = '';
	fetchWeather(value);
};

searchBtn.addEventListener('click', search);
export default search;
