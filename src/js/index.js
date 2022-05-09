import fillHtml from './components/Card';

const WEATHER_API = '1c3d95576952b1e721446421b520e447';
const fetchWeather = async (searchValue = 'Naryn') => {
	try {
		const res = await fetch(`
		https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${WEATHER_API}
		`);
		const data = await res.json();
		console.log(data);
		fillHtml(data);
	} catch (err) {
		console.error(err);
	}
};
fetchWeather();
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const search = (e) => {
	e.preventDefault();
	const value = searchInput.value;
	searchInput.value = '';
	fetchWeather(value);
};

searchBtn.addEventListener('click', search);
