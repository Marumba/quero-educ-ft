import Home from './pages/home';
import FavoriteScholarships from './pages/favorites/scholarships';
import PreRegistration from './pages/preRegistration';
import MyAccount from './pages/myAccount';
import Error404 from './pages/error404';

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/minha-conta',
		exact: true,
		component: MyAccount
	},
	{
		path: '/minha-conta/bolsas-favoritas',
		exact: true,
		component: FavoriteScholarships
	},
	{
		path: '/minha-conta/pre-matriculas',
		exact: true,
		component: PreRegistration
	},
	{
		path: '*',
		component: Error404
	}
];

export default routes;
