document.getElementById("sub-btn").addEventListener('click', (e) => addItem())

//function to create dynamically a list element when a text is input 
function addItem() {
    var itemName = document.getElementById("add-item"); //targets the input element
    var itemText = itemName.value // stores the input element value
    let li = document.createElement('li');   //creates a new list element in the DOM
    li.innerHTML = itemText; //assinges the stored input text in the element
    li.setAttribute('class', 'added-items') //add a class attribute to the new element
    document.getElementById('item-list').firstElementChild.appendChild(li); //appends the new item to the ul element
}