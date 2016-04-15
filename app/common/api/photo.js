function getPhotos() {
  return [
    {url: "http://i.imgur.com/GMJBOCc.jpg"},
    {url: "http://i.imgur.com/VjckZE4.jpg"},
  ]
}

export function fetchPhotos() {
  return new Promise(
    function(resolve, reject) {
      setTimeout(() => {
        resolve(getPhotos())
      }, 100)
  })
}
