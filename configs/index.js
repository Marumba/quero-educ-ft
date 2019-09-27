const config = (env = process.env.NODE_ENV) => {
	const conf = {};
	switch (env) {
		case 'development':
			conf.appIndexUrl = '/';
			conf.showLog = true;
			conf.apiScholarship = 'https://testapi.io/api/redealumni/scholarships';
			conf.whatsappUrl = '//api.whatsapp.com/send?phone=5508001232222';
			break;
		case 'production':
			conf.appIndexUrl = '/';
			conf.showLog = false;
			conf.apiScholarship = 'https://testapi.io/api/redealumni/scholarships';
			conf.whatsappUrl = '//api.whatsapp.com/send?phone=5508001232222';
			break;
		default:
			break;
	}
	return conf;
};

module.exports = env => config(env);
