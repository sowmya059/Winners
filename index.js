let winners = ["Anna", "Beth", "Cara"]

let gold = winners.filter((winner, index) =>index==0)
let silver = winners.filter((winner, index)=>index==1)
let bronze = winners.filter((winner, index)=>index==2)
console.log(`Gold winner: ${gold}, Silver winner: ${silver}, Bronze winner: ${bronze}`)