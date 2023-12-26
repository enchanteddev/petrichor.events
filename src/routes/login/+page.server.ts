import type { PageServerLoad, Actions } from './$types';
import { API, setToken } from '$lib/index'
import { isLogin,userEvents } from "$lib/stores"

export const load: PageServerLoad = (event) => {
	return {
		logged_in: false
	};
};

export const actions = {
	login: async ({ request }) => {
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
        const resp_content = await response.json()
        if (resp_content['ok']){
            console.log(resp_content)
            isLogin.set(true)
            return { success: true, response: resp_content };
        }
        isLogin.set(false)
        userEvents.set([])


	},
} satisfies Actions;