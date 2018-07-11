/**
 * Mocking client-server processing
 */
const _usuarios = require('@/api/usuarios_test.json');

export default {
  getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (_usuarios) {
          resolve(_usuarios);
        } else {
          reject("Nenhum registro encontrado.");
        }
      }, 2000);
    });
  }
};