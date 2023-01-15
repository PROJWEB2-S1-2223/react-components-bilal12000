import React from 'react';

import './App.css';

const  liste =[{

  produit: "lait",

  id:      0,

},
 {
     produit: "chocolat",

     id:       1,

  },
    {



        produit: "sucre",
      id: 2,




    }

    


];




function App() {
  return (


    <div>
    <h1> Liste de produit </h1>

    <ul>
          {liste.map(function(item){


          return(
          <li key ={item.id}>
          <span>{item.produit}, </span>






          </li>
        );
     })}
    </ul>



  </div>
  );
}







export default App;
