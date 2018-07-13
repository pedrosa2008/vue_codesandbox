/**
 * Mocking client-server processing
 */
const _data = require('@/api/usuario.json');

export default {
  authenticate(usuario) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let retorno = {};

        for (let index in _data) {
          let user = _data[index];
          if (usuario.login === user.login && usuario.senha === user.senha) {
            retorno = user;
          }
        }

        if (retorno.id) {
          resolve(retorno);
        } else {
          reject(retorno);
        }
      }, 2000);
    });
  }
};