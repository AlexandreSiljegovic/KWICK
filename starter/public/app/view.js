import { data } from './data.js';

let f7, mainView, messages, messagebar;

const $ = Dom7;

export const view = {
	init: identifier => {
		f7 = new Framework7({
			root: '#app',
			name: 'Kwick',
			id: 'com.kwick.dev',
			routes: [
				{
					name: 'messages',
					path: '/messages/',
					pageName: 'messages'
				},
				{
					name: 'menu',
					path: '/menu/',
					pageName: 'menu'
				}
			]
		});

		mainView = f7.views.create('.view-main');

		// === Messages ===

		messages = f7.messages.create({
			el: '.messages',
			scrollMessages: true
		});

		// Init Messagebar
		messagebar = f7.messagebar.create({
			el: '.messagebar'
		});

		console.log('view ready');
	},

	openMenuScreen: () => {
		mainView.router.navigate({ name: 'menu' });
	},

	closeMenuScreen: () => {
		mainView.router.navigate({ name: 'messages' });
	}
};
