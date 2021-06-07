const input = document.querySelector('.input-anime')
const list = document.querySelector('.animes')


const criadores = {
  criaLi() {
    const li = document.createElement('li')
    return li
  },
  criaEBotaClass(tipo, clase) {
    const el = document.createElement(tipo)
    el.classList.add(clase)
    return el
  },
  criaInput() {
    const inputs = document.createElement('input')
    inputs.type = 'checkbox'
    return inputs
  }
}


function criaDivCheck(animeText){
  const anime = document.createTextNode(animeText)

  const li = criadores.criaLi()

  const div = criadores.criaEBotaClass('div', 'check')

  const assistido = document.createTextNode('assistido')
  const input = criadores.criaInput()
  input.classList.add('input-check')


 
  li.appendChild(anime)
  li.appendChild(div)

  div.appendChild(assistido)
  div.appendChild(input)

  list.appendChild(li)

}







input.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
      if(input.value == '') return
        const anime = input.value 
        criaDivCheck(anime)
        input.value = ''
        salvaAnimes()
    console.log(localStorage.getItem('animeszoes'))
    }
})



document.addEventListener('click', e => {
  const el = e.target
  if(el.classList.contains("input-check")){
    if(el.parentElement.style.color == '#15B097') {
      return
    }
    el.parentElement.style.color = '#15B097'
    el.style.display = 'none'
    salvaAnimes()

  }
})

function salvaAnimes(){
  const liAnimes = document.querySelectorAll('.animes li')
  const liDeAnimes = []

  for(anime of liAnimes){
    let animeTxt = anime.innerHTML
    liDeAnimes.push(animeTxt)
  }
  const animesJSON = JSON.stringify(liDeAnimes)
  localStorage.setItem('animeszoes', animesJSON)
}

function adicionaAnimesSalvos() {
  const animes = localStorage.getItem('animeszoes')
  const listaDeAnimes = JSON.parse(animes)

  for (let anime of listaDeAnimes) {
      list.innerHTML += `<li>${anime}</li>`
  }
}
adicionaAnimesSalvos()
//localStorage.clear()