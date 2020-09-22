class Todo {
  constructor() {
    this._locale = 'pt-BR'
    this._dateH1 = document.querySelector('.dateH1')
    this._textTodo = document.querySelector('input[type="text"')
    this._addTodo = document.querySelector('button.btn-add')
    this._includeTodo = document.querySelector('div.container-include-todo')
    this._todoAdded = document.querySelector('.include-todo')
    this._required = document.querySelector('#required')

    this.getDate();
    this.showIncludeTodo();
    this.hideIncludeTodo();
    
    this._todos = []
  }

  getDate() {
    this._currentDate = new Date;

    this._formatDate = this._currentDate.toLocaleDateString(this._locale, {
      month: "short"
    })

    return this._dateH1.innerHTML = `
      ${this._currentDate.getDate()}
      ${this._formatDate.split('.')[0]}, 
      ${this._currentDate.getFullYear()}
    `;
  }

  showIncludeTodo() {
    this._addTodo.addEventListener('click', () => {
      this._required.style.display = "none"

      this._textTodo.value = ''

      this._includeTodo.classList.toggle('d-block')
      
      this._includeTodo.className.indexOf('d-block') > 0 ? this._addTodo.classList.add('close-todo') : this._addTodo.classList.remove('close-todo')
    })
  }

  hideIncludeTodo() {
    this._todoAdded.addEventListener('click', () => {
      this._includeTodo.classList.remove('d-block')
      this._addTodo.classList.toggle('close-todo')

      this.pushInArray()
    })
  }

  pushInArray() {
    if(!this._textTodo.value) {
      this._required.style.display = "block"
      this._includeTodo.classList.add('d-block')
      this._addTodo.classList.toggle('close-todo')
    } else {
      this._todos.unshift(this._textTodo.value)
      this._required.style.display = "none"
      this.createTable()
    }
  }

  isChecked() {
    this._done.forEach((e, index) => {
      e.addEventListener('click', () => {
        e.checked ? e.parentElement.classList.add('done') : e.parentElement.classList.remove('done')
      })
    })
  }

  createTable() {
    let input = document.createElement('input')
    input.type = 'checkbox'
    let li = document.createElement('li')

    li.innerHTML = this._textTodo.value

    document.querySelector('.todo-list>ul').appendChild(li).appendChild(input)

    this._todoLi = document.querySelector('ul>li')
    this._done = document.querySelectorAll('input[type="checkbox"')
    this._doneAll = document.querySelectorAll('input[type="checkbox"')
    
    this.isChecked();
  }
}