import { API } from '$lib/index'
/** @type {import('./$types').Actions} */


export const actions = {	
    default: async (request) => {

      const data = await request.formData();
        await fetch(API.register,{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
          },
          body:JSON.stringify({
            "username":data.username,
            "email":data.email,
            "password":data.password,
            "phone":data.phone,
            "college":data.college,
            "year":data.year,
            "instituteID":data.instituteID,
            "stream":data.stream
          }) 
        }).then(res => res.json())
        .then(res => {
            return res.registered
        }).catch(err => {
            console.log(err)
        })
        	

    }
};