# September 22, 2022
# Basic currency conversion from USD to CAD
usr = ''
while (usr != 'q'):
  usr = input('How many dollars do you want to exchange to CAD? ($.$$) \n')
  if (usr == 'q' or usr.isnumeric()):
    break
  flt = usr.split('.')
  x, y = flt[0], flt[1]
  if (x.isnumeric() and y.isnumeric()):
    x = float(x) + (float(y)/100)
    tmp = x * (1/0.73)
    print(f'You get CAD: ${tmp:.2f}')
