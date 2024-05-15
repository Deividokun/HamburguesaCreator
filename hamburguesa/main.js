const boton = document.querySelector('#botonete')
const PRODCUTOS = []
console.log(PRODCUTOS)

boton.addEventListener('click', (ev) => {
  const nombre$$ = document.querySelector('#nombre')
  const imagen$$ = document.querySelector('#imagen')
  const precio$$ = document.querySelector('#precio')
  const tipo$$ = document.querySelector('#tipo')

  const newProducto = {
    Nombre: nombre$$.value,
    imagen: imagen$$.value,
    precio: precio$$.value,
    tipo: tipo$$.value
  }

  PRODCUTOS.push(newProducto)
  creacionPOPUP(PRODCUTOS)
})

const creacionPOPUP = (PRODCUTOS) => {
  const Hamburguesas$$ = document.querySelector('.hamburguesas')
  const Wraps$$ = document.querySelector('.wraps')
  const Acompañantes$$ = document.querySelector('.acompañantes')
  const bebida$$ = document.querySelector('.bebida')

  Hamburguesas$$.innerHTML = '<h2>HAMBURGUESAS</h2>'
  Wraps$$.innerHTML = '<h2>WRAPS</h2>'
  Acompañantes$$.innerHTML = '<h2>ACOMPAÑANTES</h2>'
  bebida$$.innerHTML = '<h2>BEBIDAS</h2>'

  for (const producto of PRODCUTOS) {
    let prodcutoinyected = `
    <div class = "Card">
    <h2>${producto.Nombre}</h2>
    <img src="${producto.imagen}"/>
    <p>${producto.precio} € </p>
    </div>
   `
    if (producto.tipo === 'hamburguesa') {
      Hamburguesas$$.innerHTML += prodcutoinyected
    } else if (producto.tipo === 'wrap') {
      Wraps$$.innerHTML += prodcutoinyected
    } else if (producto.tipo === 'acompañante') {
      Acompañantes$$.innerHTML += prodcutoinyected
    } else if (producto.tipo === 'bebida') {
      bebida$$.innerHTML += prodcutoinyected
    }
  }
}
const remove = document.getElementById('logo')
const form = document.querySelector('form')
remove.addEventListener('click', () => {
  if (remove) {
    form.classList.toggle('goodBye')
  }
})

const removeItems = document.getElementById('addRES')

removeItems.addEventListener('click', () => {
  PRODCUTOS.length = 0
  document.querySelector('.hamburguesas').innerHTML = ''
  document.querySelector('.wraps').innerHTML = ''
  document.querySelector('.acompañantes').innerHTML = ''
  document.querySelector('.bebida').innerHTML = ''
})
