import type { PageServerLoad, Actions } from './$types';
import { API } from '$lib/index'

export const load: PageServerLoad = (event) => {
	return {
		logged_in: false
	};
};

export const actions = {
	login: async ({ cookies, request }) => {
        const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
        
        const response = await fetch(API.login);

		return { success: true };
	},
} satisfies Actions;