// const backend_url = 'http://127.0.0.1:8000/'
const backend_url = 'https://petrichor-backend.vercel.app/'

export const API = {
    login: backend_url + 'web/login/',
    register: backend_url + 'web/register/',
    logout: backend_url + 'web/logout/',
    events_apply_paid: backend_url + 'web/events/apply/paid',
    events_apply_free: backend_url + 'web/events/apply/free',
    feedback: backend_url + 'web/send_grievance',
    user: backend_url + "web/user/",
    whoami: backend_url + "web/whoami/",
    event: backend_url + "web/event/",
    verifyCA: "https://pcap-back-production.up.railway.app/api/events/verify",
    
    hasAddress: backend_url + 'hasaddress/',
    addAddress: backend_url + 'address/add/',
    getAddress: backend_url + 'address/get/',
    merchPay: backend_url + 'payment/make/',
}


export const readID = (id: string) => {
    return {
        // TF01
        'type': id[0],
        'paid': id[1] == 'P',
        'index': Number(id[2] + id[3])
    }
}


export const readToken = () => {
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        
        if (cookie.startsWith('token=')) {
            return cookie.substring(6);
        }
    }
    
    return null;
}

export const setToken = (token: string, expirationDays: number) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);

    const expires = expirationDays ? `expires=${expirationDate.toUTCString()}` : '';

    document.cookie = `token=${token}; ${expires}; path=/`;
   
}

export const deleteToken = () =>{
    try {
        document.cookie="token=;expires=Thu, 01 Jan 2000 00:00:01 GMT"
    } catch (error) {
        console.log(error)
    }
}

export async function POST(url: string, body: any) {
    return await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}


export function titleCase(inputString: string) {
    // return inputString
    // Split the input string into an array of sentences
    const sentences = inputString.split('.');
  
    // Capitalize the first word of each sentence
    const titleSentences = sentences.map(sentence => {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1)
    });
  
    // Join the sentences back into a single string
    const titleString = titleSentences.join('. ');
  
    return titleString;
  }