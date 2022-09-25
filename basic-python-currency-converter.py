# Single interaction currency conversion in whole dollars
rates = {'USDCAD':1.3,'GBPUSD':1.2,'AUDUSD':0.95,'NZDUSD':1.2,'EURUSD':1.05,'USDJPY':145.50}
base = input('What is your base currency?')
quote = input('What is your quote currency?')
amount = input('What is the amount you will convert?')
amount = int(amount)
pair = base + quote
if (pair in rates):
  total = amount * rates[pair]
  print(f'The total after conversion is: {total:.2f} {quote}.')
else:
  print('This currency pair is not available for conversion.')
