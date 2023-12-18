const backend_url = 'http://127.0.0.1:8000/'

export const API = {
    login: backend_url + 'web/login/',
    register: backend_url + 'web/register/',
    logout: backend_url + 'web/logout/',
    events_apply: backend_url + 'web/events/apply/',
    feedback: backend_url + 'web/send_grievance',
}