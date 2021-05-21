
function getTickets() {
    return fetch('https://api.github.com/users/lzuhuo')
      .then(data => data.json())
}

function getTicket() {
  return fetch('https://api.github.com/users/lzuhuo')
    .then(data => data.json())
}

function postTicket() {
  return fetch('https://api.github.com/users/lzuhuo')
    .then(data => data.json())
}

function putTicket() {
  return fetch('https://api.github.com/users/lzuhuo')
    .then(data => data.json())
}

export {getTicket, getTickets, postTicket, putTicket}  