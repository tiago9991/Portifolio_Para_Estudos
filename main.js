/* integração com o GitHub */

function getProjects () {
  const urlGitHub = 'https://api.github.com/users/tiago9991/repos';
  let loadingElement = document.getElementById('carregando');

  fetch(urlGitHub, {
    method: 'GET',
    header: {
      'Authorization': 'Bearer '
    }
  })
      .then((response) => response.json())
      .then((response) => {
        loadingElement.style.display = 'none'
          showProjects(response)
      })
      .catch((e) => {
        console.log(e)
      })
}

function showProjects(data) {
  var listElement = document.getElementById('main-meus-projetos-lista')

  for(let i = 0; i < data.length; i++)
  {
      let a = document.createElement("a")
      a.href = data[i]['clone_url']
      a.target = '_blank'
      a.title = data[i] ['description']
      let linkText = document.createTextNode(data[i]['name'])
      a.appendChild(linkText)
      listElement.appendChild(a)
  }
}

getProjects()

/* Menu Mobile */

const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    
  }
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
