import type { PageServerLoad, Actions } from './$types';
import { API } from '$lib/index'
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
            isLogin.set(true)
            setTimeout(()=>{
                let ans
                fetch(API.whoami,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json',
                },credentials: 'include'
                }).then(res => res.json())
                .then(res => {
                    ans=res
                    if (ans.user == null || ans.user == undefined){
                        isLogin.set(false)
                    }else{
                        isLogin.set(true)
                        userEvents.set(ans.events)
                    }
                })
            })
            return { success: true };
        }
        isLogin.set(false)
        userEvents.set([])


	},
} satisfies Actions;