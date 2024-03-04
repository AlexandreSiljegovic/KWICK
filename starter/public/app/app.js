import { view } from './view.js';
import { data } from './data.js';

const $ = Dom7;

const app = {
	init: function() {
		// === view & data

		view.init();
		data.init();

		// Bt retour
		$('#menu-screen .return-button').on('click', view.closeMenuScreen);

		console.log('App is running ...');
	}
};

app.init();
