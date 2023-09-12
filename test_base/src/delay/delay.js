const delay = (callback, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback())
    }, ms)
  })
}

delay(() => 5 + 5, 1000)

module.exports = delay;