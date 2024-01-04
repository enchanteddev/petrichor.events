import { API } from '$lib/index'
import type { Actions } from './$types';
/** @type {import('./$types').Actions} */


export const actions = {	
    register: async ({request}) => {

      const data = await request.formData();
      let gradyear = data.get('gradyear')?.valueOf()
      if (data.get('institype') == 'school'){
         gradyear = 2024 + (12 - Number(data.get('grade')))
      }

      if (data.get('institype') == 'neither'){
        gradyear = 0;
      }

      const response = await fetch(API.register,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          "username":data.get('username'),
          "email":data.get('email'),
          "password":data.get('password'),
          "phone":data.get('phone'),
          "college":data.get('college'),
          "gradyear":gradyear,
          "institype":data.get('institype'),
          "stream":data.get('stream')
        }) 
      })
      // .then(res => res.json())
      // .then(res => {
      //   console.log(res)
      //   return {"success" : res.registered,"status":res.status,"data":res.message};
      // }).catch(err => {
      //     console.log(err)
      // })
      const resp_content = await response.json()
      console.log(resp_content);
      return {"success" : resp_content.registered,"status":resp_content.status,"data":resp_content.message};
        

  }
} satisfies Actions;