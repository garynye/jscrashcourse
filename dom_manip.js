
//console.log(window)

// single element selectors
//console.log(document.getElementById('my-form'))


const el1 = document.getElementById('my-form')
const el2 = document.querySelector('h1')

console.log(el1)
console.log(el2)
//console.log(document.querySelector('h1'))



//multiple element selectors
const el3 = document.querySelectorAll('.item')

console.log(el3)

el3.forEach((el3) => console.log(el3))



const ul = document.querySelector('.items')
//ul.remove()

//ul.lastElementChild.remove()
ul.firstElementChild.textContent = 'hello'

ul.children[1].textContent = 'welcome'
ul.children[2].innerText = 'Gary'

ul.lastElementChild.innerHTML = '<h1> hello</h1>'


const btn = document.querySelector('.btn')

btn.style.background = 'red'


btn.addEventListener('click',(e) => {
    e.preventDefault()
    console.log(e.target)
    document.querySelector('#my-form').style.background = 'grey'
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello bitch</h1>'
})


btn.addEventListener('mouseover',(e) => {
    e.preventDefault()
    console.log(e.target)
    document.querySelector('#my-form').style.background = 'black'
    document.querySelector('body').classList.add('error')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>He224234llo bitch</h1>'
})
