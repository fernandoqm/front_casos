const SessionManager = {
    getToken(){
        const token = sessionStorage.getItem('token');
        if(token) return token;
        else return null;
    },

    setUserSession(userName, token, userId, userRole){
        sessionStorage.setItem('usuario',userName);
        sessionStorage.setItem('token',token);
        sessionStorage.setItem('usuarioId',userId);
        sessionStorage.setItem('rol',userRole);
    },

    removeUserSession(){
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('usuarioId');
        sessionStorage.removeItem('rol');
    }
}

export default SessionManager;