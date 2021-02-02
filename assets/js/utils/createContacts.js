
function createContacts(contacts = []) {
  return contacts
    .map((contactLink) => {
      /* 
    Magic 
    new URL(contackLInk) -> hostname
    map.get(hostname) - > src
    return  createElem(img,{attributes:{src,alt:'contact'}})
    */
    })
    .filter(Boolean);
}