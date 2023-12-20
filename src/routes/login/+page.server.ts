import type { PageServerLoad, Actions } from './$types';
import { API } from '$lib/index'

export const load: PageServerLoad = (event) => {
	return {
		logged_in: false
	};
};

export const actions = {
	login: async ({ request }) => {
        console.log("H")
        const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
        
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': email,
                'password': password,
            })
        }

        const response = await fetch(API.login, fetchOptions);
        console.log("He"+response)
        const resp_content = await response.json()
        console.log("He")
        if (resp_content['ok']){
            console.log("Her")
            return { success: true };
        }

	},
} satisfies Actions;