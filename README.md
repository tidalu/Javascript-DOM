# javascript Dom

```
document.createElement('li')

li.setAttribute('key', 'value')

li.textContent = "nothing here"

document.createDocumentFragment()

fragment.appedchild(li)

document.appendChild(fragment)

li.classList.add("myClass")

li.classList.replace("animation")

li.classList.toggle('animation')

li.classList.remove('animation')

li.setAttribute('data-game', 'this is data set value')

li.dataset.game = 'i am newly set value'

document.createElement('p')

document.createElement('h1')

li.append(p, h1)

document.createElement('span')

li.insertBefore(li.firstChild, span)

let clone = li.cloneNode( true ) // true means clone all the children



windowParent returns the parent window mainly whenwe are using iframe with another pages also, with windowParent  we can access to the parent window and its accessibilities within the child one ,
to access just windwoParent.{document}.{parent document's methods}

element.replaceWith() is to replace any element with anything can be element or text or anything

element.replaceChild(newItem, childNode) to just replace child

element.outerHTML  returns the html comtext of the element

element.matches()  checks if one elemt is match to given class id or tagName, property is given as an parameter

element.isEqualNode() to check two element are identical with each other, even one space can make differe

element.insertAdjacentElement('position', element)   position can be beforebegin, afterbegin. beforeend , afterend

we have also insertAdjacentHTML(), insertAdjacentText()  to do the same, but for html and text

we can change the title from js, with document.title

bubbling and capturing events, the difference is where is :

    baba.addEventListener('click', () => {

        console.log('I am a parent');

    });

    child.addEventListener('click', () => {

        console.log('I am a child');

    });

    there bubbing is happeing  , when we click on the child first child's function second parent's event function is triggered

    a capturing is the opposite , first parent second child , to achieve this we should add true as the third param of addEventListener fucntion of parent


    we hahe append() and appendChild() they do both the same, but append() is in use to append multiple elements,


    we have also, newSibling and nextElementSibling which is used to get the next element , first one is to use anyhthing after the element it should not be an elemtn, it can be text also, but nextElementSibling is only to take the next elment, not just text, ti should be valid element

    we have also event delegation , which is a term : we do populate multiple elements with one event , like can be list or like that, it is called event deelegation




```
