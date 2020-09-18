const withPWA = require('next-pwa')
 
module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    scope: '/',
    sw: 'sw.js',
    disable: process.env.NODE_ENV === 'production' ? false : true
  }
})