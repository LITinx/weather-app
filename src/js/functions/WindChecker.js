const windChecker = (wind) => {
	if (wind < 2) return 'Calm';
	if (wind < 4) return 'Light breeze';
	if (wind < 6) return 'Gentle breeze';
	if (wind < 8) return 'Moderate breeze';
	if (wind < 11) return 'Fresh breeze';
	if (wind < 14) return 'Strong breeze';
	if (wind > 14) return 'Gale';
};

export default windChecker;
