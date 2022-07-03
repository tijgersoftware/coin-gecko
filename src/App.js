
import './App.css';

import { getAllProductsByCurrency, writeJsonFile, getAllProductsByCoinId } from './common/fetch';





function App() {
  // writes the coin data to a new tab with onclick button
  function coinInfo(coinId,onloadData) {

    console.log(coinId);
    const win = window.open('', 'win', 'width=500, height=500');
    console.log("coinInfo onload");
    console.log(onloadData);
    getAllProductsByCoinId(coinId).then(coinData => {
      if (!win.document.body.innerHTML) {
    
          if (coinData["name"] !== null && coinData["name"] !== undefined) {
          win.document.write(`<h2>${coinData.name}</h2>`);}
          if (coinData["symbol"] !== null && coinData["symbol"] !== undefined) {
         win.document.write(`<p>Symbol: ${coinData.symbol}</p>`);
          }
          if (coinData["hashing_algorithm"] !== null && coinData["hashing_algorithm"] !== undefined) {
         win.document.write(`<p>Hashing algorithm: ${coinData.hashing_algorithm}</p>`);
          }
          if (coinData["description"] !== null && coinData["description"] !== undefined) {
         win.document.write(`<p>Description: ${coinData.description.en}</p>`);
          }
          if (onloadData["market_cap"] !== null && onloadData["market_cap"] !== undefined) {
         win.document.write(`<p>Market cap in Euro: ${onloadData.market_cap}</p>`);
          }
          if (coinData.links.homepage !== null && coinData.links.homepage !== undefined) {
         win.document.write(`<p>Homepage: ${coinData.links.homepage[0]}</p>`);
          }
          if (coinData["genesis_date"] !== null && coinData["genesis_date"] !== undefined) {

         win.document.write(`<p>Genesis Date: ${coinData.genesis_date}</p>`);

          }
   
      }
    }

    );


}

// display home page UI
    window.onload = async () => {
      

      const data = await getAllProductsByCurrency();


 

      let buttonArray = [];
      let dataArray=[];
      for (let i = 0; i < data.length; i++) {
        const button = document.createElement('button');

        button.innerHTML = data[i].name;
        button.id = i;

        buttonArray.push({ [button.innerHTML]: button.id });
        dataArray.push({[button.innerHTML]:data[i]});


        button.onclick = () => coinInfo(data[i].id,data[i]);
        document.body.appendChild(button);



      }
    


       const products = data.map(product => {


        return `

        <button class="product">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
        <h2>${product.name}</h2>
        <p>Symbol: ${product.symbol}</p>
        <p>Current Price: ${product.current_price}</p>
        <p>High 24 hour Price: ${product.high_24h}</p>
        <p>Low 24 hour Price: ${product.low_24h}</p>
        </div>
  
   
        </button>
        `;
       

      }
      )
    
      .join('');


  
      document.getElementById('products').innerHTML = products










      const h2 = document.querySelectorAll('h2');
      h2.forEach(h2 => {


        let buttonId=  buttonArray.find(button => button[h2.innerHTML]);
        console.log("buttonId");
        console.log(buttonId)

        console.log(`The h2 is ${h2.innerHTML} the buttons id are ${buttonId[h2.innerHTML]}`);













        







        

        h2.parentElement.appendChild(document.getElementById(buttonId[h2.innerHTML]));
       



      }
      );

      


      







    



      

    }
    return (
      <div className="App">
    


        <div id="products"></div>
      </div>
    );
  




  
}

export default App;
