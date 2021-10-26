import { http } from './config';

export default {
    list: (route) => {
        return http.get(route);
    },

    create: (route, data) => {
        return http.post(route, data);
    }
}