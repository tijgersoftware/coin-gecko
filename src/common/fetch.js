
import * as fs from 'fs'


export const fetchApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    }

    // store coin id
let coinId = ['cardano'];
// dict of urls to fetch
let urls = {

    getAllProductsByCurrency: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false',
    getAllProductsByCoinId: 'https://api.coingecko.com/api/v3/coins/'}

    // fetc api get all products by currency 
    export const getAllProductsByCurrency = async () => {
        const response = await fetch(urls.getAllProductsByCurrency);
        const data = await response.json();
        return data;
    }
    // fetch api get all products by coin id
    export const getAllProductsByCoinId = async (coinId) => {
        const response = await fetch(urls.getAllProductsByCoinId + coinId);
        
        const data = await response.json();
        console.log(data);
        return data;
    }

//  onclick function that will be used in the App.js file to open a pop up window and displays the results of the function getAllProductsByCoinId
export function coinInfo(coinId) {
    // create a new window
    const win = window.open('', 'win', 'width=500, height=500');
    // write the html code to the window
    win.document.write(`<h1>${coinId}</h1>`);
    // call the function getAllProductsByCoinId and pass the coinId as a parameter
    getAllProductsByCoinId(coinId);
    // display the name, symbol, hashing_algorithm, description, market_cap,homepage, genesis_date of the function getAllProductsByCoinId in the window
    win.document.write(`<h2>${getAllProductsByCoinId.name}</h2>`);
    win.document.write(`<p>${getAllProductsByCoinId.symbol}</p>`);
    win.document.write(`<p>${getAllProductsByCoinId.hashing_algorithm}</p>`);
    win.document.write(`<p>${getAllProductsByCoinId.description}</p>`);
    win.document.write(`<p>${getAllProductsByCoinId.market_cap}</p>`);
    win.document.write(`<p>${getAllProductsByCoinId.homepage}</p>`);
    win.document.write(`<p>${getAllProductsByCoinId.genesis_date}</p>`);

}
