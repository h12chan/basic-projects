# basic local computer usage, possible logic of URL shortener
import string
import random

urls = {}

# logic to generate the shortened path in random chars for the url
# https://pythonguides.com/python-generate-random-number/#Python_random_string_of_letters_and_numbers
N = 5
res = ''.join(random.choices(string.ascii_uppercase +  string.digits, k = N)) 
# print("The random string : " + str(res))
domain = "https://bit.ly/"
usr = input('What is your url? ')
urls[domain+res] = usr
print(urls)

for url in urls:
  print(f'The shortened url is: {url}')
  print(f'The redirected url is: {urls[url]}')
