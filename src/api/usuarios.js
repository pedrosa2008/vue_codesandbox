/**
 * Mocking client-server processing
 */
const _usuarios = require('@/api/usuarios_test.json');

export default {
  getUsuarios(cb) {
    setTimeout(() => cb(_usuarios), 1000);
  }
}