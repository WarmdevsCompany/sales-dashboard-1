// https://pokeapi.co/api/v2/pokemon/ditto
import { error } from '@sveltejs/kit';

export const load = async () => {
	// locals.userid comes from src/hooks.js
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			todos: []
		};
	}

	if (response.status === 200) {
		return {
			todos: await response.json()
		};
	}

	throw error(response.status);
};