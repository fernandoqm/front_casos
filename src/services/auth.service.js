import axios from "axios";

const API_URL = "http://localhost:43387/api/token/";

class AuthService {
  login(usuario, clave) {
    return axios
      .post(API_URL + "signin", {
        usuario,
        clave
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(usuario, correo, clave) {
    return axios.post(API_URL + "signup", {
      usuario,
      correo,
      clave
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();