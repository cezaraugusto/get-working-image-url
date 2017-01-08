'use strict'

module.exports = (url, cb) => {
  const img = new Image()
  img.onload = function () {
    cb(true)
  }
  img.onerror = function () {
    cb(false)
  }
  img.src = url
}
