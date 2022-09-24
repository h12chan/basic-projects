const rates = {USDCAD:1.3, GBPUSD:1.09, AUDUSD:0.95}

let usr = ''
do {
	usr = prompt("What is your base currency? (press 'q' to quit)");
  if (usr == 'q') break
  let quote = prompt("What is your quote currency?");
  let amount = prompt("How much would you like to exchange?");
  const pair = usr + quote;
  amount = Number(amount)  
	if (typeof(amount) == "number") {
  	for (let rate in rates) {
    	if (rate == pair) {
      	let total = amount * rates[rate]
      	console.log(`Converted amount: ${total} ${quote}`)
      }
    }
  }
}
while (usr != 'q')
