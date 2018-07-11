/**
 * Mocking client-server processing
 */
const _usuarios = require('@/api/usuarios_test.json');

export default {
  getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(_usuarios);
      }, 10000);
    });
  }
};