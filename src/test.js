!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = t()
  else if ('function' == typeof define && define.amd) define([], t)
  else {
    var o = t()
    for (var n in o) ('object' == typeof exports ? exports : e)[n] = o[n]
  }
})(self, function () {
  return (function () {
    'use strict'
    var e = {
        d: function (t, o) {
          for (var n in o) e.o(o, n) && !e.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: o[n] })
        },
        o: function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        },
        r: function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 })
        }
      },
      t = {}
    e.r(t),
      e.d(t, {
        StbServerUpgrade: function () {
          return o
        }
      })
    const o = new (class {
      init() {}
    })()
    return t
  })()
})
