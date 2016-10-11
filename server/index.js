'use strict';
const fs = require('fs');
const Firebase = require('firebase');
const config = {
    apiKey: "7Uw2HXS5IDAw95zO6QtSf8ycMi4FITXv8jpst9fZ",
    authDomain: "danubesoft-test.firebaseapp.com",
    databaseURL: "https://danubesoft-test.firebaseio.com",
};
Firebase.initializeApp(config);
const refNews = Firebase.database().ref('news');

function start() {
    let index = 0;
    setInterval(() => {
      fs.readFile('news.json', (error, data) => {
            if(index > 10) return;
            if (error) return console.log(error);
            const result = JSON.parse(data)[index];
            refNews.push(result);
            console.log(`News ${index} was pushed`);
            return index++;
        });
    }, 2000);
}

start();
