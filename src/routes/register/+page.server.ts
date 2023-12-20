import { API } from '$lib/index'
/** @type {import('./$types').Actions} */


export const actions = {	
    default: async (request) => {

      const data = await request.formData();

      if (data.institype == 'school'){
        data.gradyear=2024+(12-data.grade)
      }

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
          "gradyear":data.gradyear,
          "institype":data.institype,
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