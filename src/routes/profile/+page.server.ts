import { API } from "$lib"
import type { PageServerLoad } from './$types';


export const load: PageServerLoad  = async ({fetch, cookies}) => {
    let ans
    await fetch(API.user,{
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
    },
    body: JSON.stringify({'token': cookies.get('token')})
    }).then(res => res.json())
    .then(res => {
        ans=res
    })
    return {
            // @ts-ignore
            status:ans.status,
            // @ts-ignore
            user:ans.response
        }
}