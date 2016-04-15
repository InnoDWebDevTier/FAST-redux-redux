function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function fetchCounter() {
  // Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
  return new Promise(
    function(resolve, reject) {
      setTimeout(() => {
        resolve(getRandomInt(1, 100))
      }, 500)
  })

  // In the case of a real world API call, you'll normally run into a Promise like this:
  // API.getUser().then(user => callback(user))
}
