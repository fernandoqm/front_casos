import authHeader from './auth-header';
import http from '../Http/http-common';

class UserService {
    getPublicContent(){
        return http.get("/todos");
    }

    getUserBoard(){
        return http.get("usuario",{ headers : authHeader() });
    }

    getAdminBoard(){
        return http.get("administrador",{ headers: authHeader() })
    }
}

export default new UserService;

