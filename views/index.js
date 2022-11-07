const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT

app.use(express.static)

// require('dotenv').config({ path: require('find-config')('.env') })

require("dotenv").config({ path: "./config/.env"});

console.log(process.env)

document.addEventListener("DOMContentLoaded", getFetch)

function getFetch(){
  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-04-07'

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "",
      'X-RapidAPI-Host': ""
    }
  };

  fetch(url,options)
      .then(res => res.json())
      .then(data => {
        console.log(data.response[0]) 

        // data.response[0].teams.forEach( obj => { 
        //   let p = document.createElement('p')
        //   p.textContent = obj.name
        //     document.querySelector('#one').appendChild(p)
          
        // })
       document.querySelector('.firstSlideOneNameAway').innerText = data.response[0].teams.away.name
       document.querySelector('.firstSlideOneNameHome').innerText = data.response[0].teams.home.name
       document.querySelector('.firstSlideOneAwayScore').innerText = data.response[0].score.fulltime.away
       document.querySelector('.firstSlideOneHomeScore').innerText = data.response[0].score.fulltime.home

       document.querySelector('.firstSlideTwoNameAway').innerText = data.response[1].teams.away.name
       document.querySelector('.firstSlideTwoNameHome').innerText = data.response[1].teams.home.name
       document.querySelector('.firstSlideTwoAwayScore').innerText = data.response[1].score.fulltime.away
       document.querySelector('.firstSlideTwoHomeScore').innerText = data.response[1].score.fulltime.home

       document.querySelector('.firstSlideThreeNameAway').innerText = data.response[2].teams.away.name
       document.querySelector('.firstSlideThreeNameHome').innerText = data.response[2].teams.home.name
       document.querySelector('.firstSlideThreeAwayScore').innerText = data.response[2].score.fulltime.away
       document.querySelector('.firstSlideThreeHomeScore').innerText = data.response[2].score.fulltime.home
    
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}
