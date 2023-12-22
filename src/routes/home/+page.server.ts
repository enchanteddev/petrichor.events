import type { Actions } from './$types';
import { API } from '$lib/index'
import { isLogin,userEvents } from '$lib/stores';

setTimeout(() => {
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
        console.log(res)
        if (ans.user == null || ans.user == undefined){
            isLogin.set(false)
            userEvents.set([])
        }else{
            isLogin.set(true)
            userEvents.set(ans.events)
        }
    })
},0)

export const actions = {
	feedback: async ({ request }) => {
        console.log('YEEE')
        const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const body = data.get('body');
        
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': email,
                'name': name,
                'content': body
            })
        }

        const response = await fetch(API.feedback, fetchOptions);
        const resp_content = await response.json()
        if (resp_content['success']){
            return { success: true };
        }

	},
} satisfies Actions;