import {menuArray} from  "/data.js"

const foodDivel = document.getElementById("foodDiv")
const OrderDivel = document.getElementById("OrderDiv")
const orderpopupel = document.getElementById("orderpop")
const strbtnel = document.getElementById("strbtn")
const textnameel = document.getElementById("textname")



const foodArray = []
function getArray(foods){        
    for(let food of foods){
        foodArray.push(food)               
    }
    return foodArray
}


function foodTable(foods){
    let foodCardTable = ``    
    const foodArrays = getArray(foods)     
    for(let card of foodArrays){        
        foodCardTable +=`
        <div class="foodCard">
                <div class="emojiWrapper">
                    <span class="emoji">${card.emoji}</span>
                </div>
                <div class="food-info">
                    <h2>${card.name}</h2>
                    <p>${card.ingredients}</p>
                    <h2>${card.price}</h2>
                </div>
                <div class="buttonWrapper">
                    <button class="plusButton" id= ${card.id}>+</button>
                </div>                
        </div>`
    }
    foodDivel.innerHTML = foodCardTable        
}
foodTable(menuArray)



let countOrder = 0
document.querySelectorAll(".plusButton").forEach(addbtn => {
    addbtn.addEventListener("click", (e) => {       
        const clickedId = e.target.id;                  
        countOrder += 1;
        listOrders(clickedId)
    });    
});


let totalPrice = 0
let orderList = `<h1 class="yourorderh1">Your Order</h1>`
function listOrders(clickedId){
    
    const product = menuArray.find(item => item.id == clickedId);
    totalPrice += product.price; 
    
    orderList +=`<div>

        <h2>${product.name}<span><button class="removebtn" id="removebtn">remove</button></span><span class="totalprice">${product.price}</span></h2>  
    </div>` 


    let TotalList = `
        <hr>   
        <h2>Total Price: <span class="totalprice">${totalPrice}</span></h2> 
        <button class="greenbutton" id="completebtn">Complete order</button>
    `
    OrderDivel.innerHTML = orderList + TotalList   


    const completebtnel = document.getElementById("completebtn")
    completebtnel.addEventListener("click", () => {
        orderpopupel.style.display = "block";
    });

    
    strbtnel.addEventListener("click", () => {        
        const customerName = textnameel.value
        takeOrderApi(customerName)        
        totalPrice = 0
        countOrder = 0
        foodArray.length = 0;
        orderList = `<h1 class="yourorderh1">Your Order</h1>`
        orderpopupel.style.display = "none"

    });


    removebtn.addEventListener("click", () => {
        console.log("Değerleri Arrayde tut ordan id ye göre sil ")
    })
}


function takeOrderApi(name){
    const thxPostCard =`<div class="thxbox">
                        <h2 class="">Thanks, ${name}! Your order is on its way!</h2>       
                    </div>` 
    OrderDivel.innerHTML = thxPostCard

}

















