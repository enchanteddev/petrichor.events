import { API } from "$lib"
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad  = async ({fetch, cookies}) => {
    console.log("here")
    let ans
    await fetch(API.user,{
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
    },
    body: JSON.stringify({"token": cookies.get('token')})
    }).then(res => res.json())
    .then(res => {
        ans=res
    }).catch(err => {
        // console.log(err)
        ans={"status":false,
            "response": null}
            // window.location.href='/login'
    })
    return {
            // @ts-ignore
            status:ans.status,
            // @ts-ignore
            user:ans.response
        }
}