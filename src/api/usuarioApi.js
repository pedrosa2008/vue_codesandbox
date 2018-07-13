/**
 * Mocking client-server processing
 */
const _data = require('@/api/usuario.json');

export default {
  getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (_data) {
          resolve(_data);
        } else {
          reject("Nenhum registro encontrado.");
        }
      }, 2000);
    });
  }
};