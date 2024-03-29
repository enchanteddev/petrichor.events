import type { PageServerLoad, Actions } from './$types';

import { API, setToken, POST } from '$lib/index'
import { isLogin } from "$lib/stores"

export const load: PageServerLoad = async ({url}) => {
    const nextpg = url.searchParams.get('nextpg')
    console.log(nextpg)
	return {
        nextpg : nextpg,
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
        console.log(resp_content)
        if (resp_content['ok']){
            console.log(resp_content)
            return { success: true, response: resp_content };
        }


	},
} satisfies Actions;