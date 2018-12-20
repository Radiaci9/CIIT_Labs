const getUser = () => (
    fetch(`https://api.github.com/users/${document.getElementById('user').value}`)
    .then(res => res.json())
    .then(data => {
        let output = ''
        output += `<img src=${data.avatar_url} style='width: 250p; height: 250px; border-radius: 15px'>`
        output += `<h2 style='margin: 0'>${data.name}</h2>`
        output += `<p style='margin: 0'>${data.login}</p>`

        output += `<p style='width: 250px'>${data.bio}</p>`
        output += `<hr style='width: 250px; margin-left: 0'>`
        output += `<p style='margin: 0'>${data.company}</p>`
        output += `<p style='margin: 0'>${data.location}</p>`
        output += `<a style='margin: 0' href=${data.email ? data.email : '#'}>${data.email ? data.email : 'none'}</a><br/>`
        output += `<a style='margin: 0' href=${data.blog}>${data.blog}</a>`
        document.getElementById('userBlock').innerHTML = output

    })
    .catch(err => console.log(err))
  )
  document.getElementById('getUser').addEventListener('click', getUser)

  getUser()
  