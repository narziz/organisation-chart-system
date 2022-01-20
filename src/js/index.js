import '../scss/main.scss';
import imageAdd from '../icons/add.png'
import imageRemove from '../icons/remove.png'
import imageCancel from '../icons/cancel.png'
import imageConfirm from '../icons/confirm.png'

let button = document.querySelector('button.category__button--add')
button.addEventListener('click', function (event) {
  init(event)    
})

function init(event) {
  let category = event.target.closest('.category')
  let subCategories = category.nextElementSibling

  if (subCategories) {
    addCategory(subCategories)
  } else {
    let ul = document.createElement('ul')
    ul.classList.add('categories')
    if (category.closest('.categories__item')) {
      category.closest('.categories__item').append(ul)
    } else {
      category.closest('.container').append(ul)
    }
    
    addCategory(ul)
  }
}

function addCategory(elem){

  let li = createElement({ el: 'li', class: 'categories__item', parent: elem })
  let category = createElement({ el: 'div', class: 'category', parent: li })
  let input = createElement({
    el: 'input',
    class: 'category__input',
    placeholder: 'Category Name...',
    parent: category
  })

  let btn_group = createElement({ el: 'div', class: 'category__btn-group', parent: category })

  let btn_cancel = createElement({ 
    el: 'button', 
    btnType: 'cancel',
    class: ['category__btn', 'category__button--cancel'], 
    parent: btn_group 
  })

  let btn_confirm = createElement({
    el: 'button',
    btnType: 'confirm',
    class: ['category__btn', 'category__button--confirm'],
    parent: btn_group
  })

 createElement({ el: 'img', class: 'category__img', src: imageCancel, parent: btn_cancel })
 createElement({ el: 'img', class: 'category__img', src: imageConfirm, parent: btn_confirm })

}

function createCategory(elem) {
  let category = elem.closest('.category')
  let input = category.firstElementChild
  let buttons = category.lastElementChild
  let inputVal = input.value
  input.remove()
  buttons.remove()

  category.classList.add('category--default')

  createElement({ el: 'span', class: 'category__title', text: inputVal, parent: category })
  let btn_group = createElement({ el: 'div', class: 'category__btn-group', parent: category })

  let btn_add = createElement({ 
    el: 'button', 
    btnType: 'add',
    class: ['category__btn', 'category__button--add'], 
    parent: btn_group 
  })

  let btn_remove = createElement({
    el: 'button',
    btnType: 'remove',
    class: ['category__btn', 'category__button--remove'],
    parent: btn_group
  })

  createElement({ el: 'img', class: 'category__img', src: imageAdd, parent: btn_add })
  createElement({ el: 'img', class: 'category__img', src: imageRemove, parent: btn_remove })
}

function removeCategory(event) {
  let category = event.target.closest('.categories__item');
  let categories = category.parentElement;

  if (categories.children.length > 1) {
    category.remove()
  } else {
    categories.remove()
  }
}

function createElement(params){
  let elem = document.createElement(params.el)

  if (Array.isArray(params.class)) {
    params.class.forEach(clsName => elem.classList.add(clsName))
  } else {
    elem.classList.add(params.class)
  }

  if (params.text) {
    elem.textContent = params.text
  }

  if (params.src) {
    elem.src = params.src
  }

  if (params.placeholder) {
    elem.placeholder = params.placeholder
  }

  if (params.btnType === 'add') {
    elem.onclick = (e) => init(e)
  } else if (params.btnType === 'remove') {
    elem.onclick = (e) => openModal(e)
  } else if (params.btnType === 'confirm'){
    elem.onclick = () => createCategory(elem) 
  } else if (params.btnType === 'cancel'){
    elem.onclick = (e) => removeCategory(e)
  }

  params.parent.append(elem)

  return elem
}

function openModal(event) {
  let modal = document.body.lastElementChild
  let btnCancel= modal.querySelector('.modal__button--cancel')
  let btnDelete = modal.querySelector('.modal__button--delete')
  modal.classList.add('modal--active')

  btnCancel.addEventListener('click', function () {
    closeModal()
  })
  btnDelete.addEventListener('click', function () {
    removeCategory(event)
    closeModal()
  })
}

function closeModal(params) {
  let modal = document.body.lastElementChild
  modal.classList.remove('modal--active')
}