import { API } from "$lib"
import type { PageLoad } from './$types';


export const load: PageLoad  = async ({fetch}) => {
    let ans
    await fetch(API.user,{
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
    },credentials: 'include'
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