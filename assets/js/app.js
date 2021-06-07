const input = document.querySelector('.input-anime')
const list = document.querySelector('.animes')


function criaLi() {
  const li = document.createElement('li')
  return li
}

function criaEBotaClass(tipo, clase) {
  const el = document.createElement(tipo)
  el.classList.add(clase)
  return el
}

function criaInput() {
  const inputs = document.createElement('input')
  inputs.type = 'checkbox'
  return inputs
}

function criaDivCheck(animeText){
  const anime = document.createTextNode(animeText)

  const li = criaLi()

  const div = criaEBotaClass('div', 'check')

  const assistido = document.createTextNode('assistido')
  const input = criaInput()


 
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
    }
})


