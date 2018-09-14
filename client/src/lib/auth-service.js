import axios from 'axios'

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000/auth',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password) => {
    return this.service.post('/signup', { username, password })
      .then(response => response.data)
      .catch(error => error)
  }

  login = (username, password) => {
    return this.service.post('/login', { username, password })
      .then(response => response.data)
      .catch(error => error)
  }

  logout = () => {
    return this.service.get('/logout')
      .then(response => response.data)
      .catch(error => error)
  }

  private = () => {
    return this.service.get('/private')
      .then(response => response.data)
      .catch(error => error)
  }

}

export default AuthService;
