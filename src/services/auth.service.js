import http from '../http/http-common';

class AuthService {
  login(usuario, clave) {
    return http.post("signin",{usuario, clave})
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("usuarios", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("usuarios");
  }

  /*register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }*/

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('usuarios'));;
  }
}

export default new AuthService();
