let stock = {
    fruits: ["banana", "apple", "grapes", "strawberry"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick",],
    toppings: ["chocolate", "peanuts"]
};
let is_shop_open=true;
let order=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open)
        {
            setTimeout(()=>{
                resolve(work())
            },time);
        }
        else
        {
            reject(console.log("our shop is closed"))
        }
    })
}
order(2000,()=>console.log(`${stock.fruits[1]} was selected`))
.then(()=>{
    return order(4000,()=>console.log(`${stock.fruits[1]} was chopped`))
})
.then(()=>{
    return order(3000,()=>console.log(`${stock.liquid[0]} was added`))
})
.then(()=>{
    return order(2000,()=>console.log("machine start bhmmmmmmmmmmmmmmm"))
})
.then(()=>{
    return order(1000,()=>console.log("select container"))
})
.then(()=>{
    return order(2000,()=>console.log(`${stock.holder[1]} is selected as container`))
})
.then(()=>{
    return order(1000,()=>console.log("select topping"))
})
.then(()=>{
    return order(2000,()=>console.log(`${stock.toppings[0]} is selected as topping of ice cream`))
})
.then(()=>{
    return order(1000,()=>console.log("serve ice cream.yummmmmmmmmmm"))
})
