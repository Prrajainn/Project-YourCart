 import React from 'react';
 function CartScreen(props){ 
     const productId = props.match.params.id;
     const qty = props.location
     return <div> 
         Cart Screen
     </div>
 }
 export  default CartScreen; 