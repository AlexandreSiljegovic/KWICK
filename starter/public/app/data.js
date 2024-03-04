import { view } from './view.js';

let identifier = '';
let messages = [
	{
		text: 'salut les amis!',
		user: 'bob',
		time: '1563117621017'
	},
	{
		text: 'bienvenue bob',
		user: 'sarah',
		time: '1563117861901'
	}
];

const server_url = 'https://kwick-f7f98.firebaseio.com';

export const data = {
	init: () => {
		console.log('data ready.');
	}
};
