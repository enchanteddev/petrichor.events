const backend_url = 'http://127.0.0.1:8000/'

export const API = {
    login: backend_url + 'api/login/',
    register: backend_url + 'api/register/',
    logout: backend_url + 'api/logout/',
    events_apply: backend_url + 'api/events/apply/',
    feedback: backend_url + 'api/send_grievance',
}