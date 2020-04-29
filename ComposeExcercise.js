// // VID125
// const user = {
//     name: 'shrujan',
//     active: true,
//     cart: [],
//     purchases: []
// }


// // compose all the functionalies together
// const compose = (f, g) => {
//     console.log();
//     (...item) => { 
//         console.log(f , g)
//     }
// };

// purchaseItems(
//     emptyCart,
//     buyItem,
//     addTax,
//     addItemToCart
// )( user, { "item": 'laptop', "price": 400}) ;

// function purchaseItems(...fnsArr) { 
//     console.log('list of fn', fnsArr)
//     return function (...userItemObj) {

//         fnsArr.reduce(compose)


//     }
//     // return fnsArr.reduce(compose) 
// }

// function addItemToCart(user, item) {
//     console.log('cart', user)
//     const updateCart = [...user.cart, item];
//     return {
//         ...user,
//         cart: updateCart
//     }
// }

// function addTax(user) {
//     console.log('tax', user)
// }

// function buyItem() {}

// function emptyCart() {}




// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
   
  // Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart
   
  //  Example data; I used this from the beginning so I can visualize my 
  //  data when I'm using functions. 
  //  { produce: 'gummies', price: 4 }
   
  const addItems = (user, item) => {
    // will fail on multiple purchases of the same item. No quantity?
    const activeUser = { 
      ...user,
      cart: [...user.cart, item]
    }
    return activeUser
  }
   
  const addTaxes = user => {
    const activeUser = { 
      ...user,
      cart: [...user.cart].map(item => {
        return {
          produce: item.produce, 
          price: item.price * 1.05}
        })
    }
    return activeUser
  }
   
  const makePurchase = user => {
    const activeUser = {
      ...user,
      purchases: [...user.cart]
    }
    return activeUser
  }
   
  const clearCart = user => {
    const activeUser = {
      ...user,
      cart: []
    }
    return activeUser
  }
   
  const results = (...fns) => {
    return fns.reduce(compose)
  }
   
// Compose created
//   const compose = (f, g) => (...args) => f(g(...args))

//Compose expanded
const compose = (f , g) => {
        // here f is the accumulator which initially stores the first element from the list of functions
        // g initially stores the second element in array
        // ITR1: f = clearCart, g = makePurchase
        // ITR2: f = Annon Accumilated fn, g = addTaxes
        // ITR3: f = Annon Fn, g = addItem
        // the functions are executed recursively so the execution starts when the entire list is traversed and the last method (add Item is executed)
        console.log(f.name , g.name);
    
        return (...args) => {
            return f(g(...args))
        }
    }
   
  // Call function
  results(clearCart, makePurchase, addTaxes, addItems)(user, { produce: 'gummies', price: 4 })
   