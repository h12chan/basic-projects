const rates = {USDCAD:1.3, GBPUSD:1.09, AUDUSD:0.95}

let status = ''
do {
	status = convertCurrency()
	console.log(status)
}
while (status != 'quit')

function convertCurrency() {
	let base = prompt("What is your base currency? (press 'q' to quit)");
  if (base == 'q') return 'quit'
  let quote = prompt("What is your quote currency?");
  let amount = prompt("How much would you like to exchange?");
  const pair = base + quote;
  amount = Number(amount)  
  console.log(`Amount of ${base} to convert is ${amount}`)
	if (typeof(amount) != "number") return
 	for (let rate in rates) {
   	if (rate == pair) {
     	let total = amount * rates[rate]
     	console.log(`Converted amount: ${total} ${quote}`)
      return 'Successful conversion of currency.'
    }
  }
}
