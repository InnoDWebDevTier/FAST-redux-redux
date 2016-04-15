function getSidebarItems() {
  return [
    {url: "/", text: "Home"},
    {url: "/group1", text: "Group 1"},
  ]
}

export function fetchSidebarItems() {
  return new Promise(
    function(resolve, reject) {
      setTimeout(() => {
        resolve(getSidebarItems())
      }, 100)
  })
}
