let inputName = document.getElementById("inputName");
let inputAuthor = document.getElementById("inputAuthor");
let inputCategory = document.getElementById("inputCategory");
let btn = document.getElementById("btn");

let cardsContainer = document.getElementById("cardsContainer");
let card = document.getElementById("card");

let imgBox = document.getElementById("imgBox");
let cardTitle = document.getElementById("cardTitle");
let cardDescription = document.getElementById("cardDescription");
let cardPrice = document.getElementById("cardPrice");
let cardRating = document.getElementById("cardRating");
let cardCategory = document.getElementById("cardCategory");
let authorName = document.getElementById("authorName");
let readMore = document.getElementById("readMore");


fetch('./books.json')
.then((ret)=>{
    if(ret.ok) return ret.json()})
    .then((data)=>{
    let arr =data.books
    for(i=1;i<arr.length;i++){
        let newCard = card.cloneNode(true)
        cardsContainer.appendChild(newCard)
        cardTitle.innerHTML = arr[i].name
        cardDescription.innerHTML = description(arr[i].discription)
        cardCategory.innerHTML = arr[i].category
        cardPrice.innerHTML = arr[i].price + "$"
        authorName.innerHTML = arr[i].author
        cardRating.innerHTML = arr[i].rating
        imgBox.style.backgroundImage=`url(${arr[i].image})`

        
    }
    btn.addEventListener('click',function(){
        if(inputAuthor || inputName || inputCategory)
        {
            Array.from(cardsContainer.children).forEach(elm => {
                elm.style.display = 'none'
            })
            for (i = 0;i < arr.length;i++)
            {
                
                if (inputName.value && !inputAuthor.value && !inputCategory.value && inputName.value.toUpperCase() == arr[i].name.toUpperCase())
                    cardsContainer.children[i+1].style.display = 'block'
                 else if (!inputName.value && inputAuthor.value && !inputCategory.value && inputAuthor.value.toUpperCase() == arr[i].author.toUpperCase())
                     cardsContainer.children[i+1].style.display = 'block'
                 else if (!inputName.value && !inputAuthor.value && inputCategory.value && inputCategory.value.toUpperCase() == arr[i].category.toUpperCase())
                   cardsContainer.children[i+1].style.display = 'block'
                 else if (inputName.value && inputAuthor.value && inputCategory.value && inputCategory.value.toUpperCase() == arr[i].category.toUpperCase()
                 && inputAuthor.value.toUpperCase() == arr[i].author.toUpperCase())
                    cardsContainer.children[i+1].style.display = 'block'
                 else if (inputName.value && !inputAuthor.value && inputCategory.value && inputCategory.value.toUpperCase() == arr[i].category.toUpperCase()
                 && inputCategory.value.toUpperCase() == arr[i].category.toUpperCase())
                    cardsContainer.children[i+1].style.display = 'block'

            }
        }
    })


function description(des)
{
    if (des.length > 100)
       return  des.slice(0,100) + "..."
}
    
})