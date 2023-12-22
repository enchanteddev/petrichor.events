const backend_url = 'http://127.0.0.1:8000/'

export const API = {
    login: backend_url + 'web/login/',
    register: backend_url + 'web/register/',
    logout: backend_url + 'web/logout/',
    events_apply_paid: backend_url + 'web/events/apply/paid',
    events_apply_free: backend_url + 'web/events/apply/free',
    feedback: backend_url + 'web/send_grievance',
    user : backend_url+"web/user/",
    whoami : backend_url+"web/whoami/",
    event : backend_url+"web/event/"
}