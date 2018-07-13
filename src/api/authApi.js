/**
 * Mocking client-server processing
 */
const _data = require('@/api/usuario.json');

export default {
  authenticate(login, senha) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let usuario = {};

        for (let user in _data) {
          if (login === user.login && senha === user.senha) {
            usuario = user;
          }
        }

        if (usuario.id) {
          resolve(usuario);
        } else {
          reject(usuario);
        }
      }, 2000);
    });
  }
};