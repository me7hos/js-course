var shoppingCart = [
    { product : 'T-shirt' , price : 10},
    { product : 'Jeans' , price : 69.9},
    { product : 'Jacket' , price : 119.99}
];

var emptyLine = 65; // Row width 
var shoppingCartItems = shoppingCart.length; // How many products are added in the bag

for ( var i=0; i<shoppingCartItems; i++ ) { 

   var productLength = shoppingCart[i].product.length;
   var productPrice = shoppingCart[i].price.toString();
   var priceLength = productPrice.length;

   var spacer = emptyLine - priceLength - productLength; // Calculate the needed amount of blank spaces to align the price
 
   document.write( shoppingCart[i].product, new Array( spacer ).join('&nbsp;'), shoppingCart[i].price, '<br />' );

};