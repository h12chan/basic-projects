# Guess the number game
usr = ''
tries = 0
ans = 0
while (usr != 'q'):
  if (usr == ans):
    print(f"You guessed the number correctly after {tries} times.")
    break
  tries = tries + 1
  usr = input("Guess the number (or 'q' to quit): ")
  usr = int(usr)
