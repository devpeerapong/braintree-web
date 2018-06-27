'use strict'

function isHTTPS(protocol) {
  protocol = protocol || 'https:'

  return protocol === 'https:'
}

module.exports = {
  isHTTPS: isHTTPS
}
