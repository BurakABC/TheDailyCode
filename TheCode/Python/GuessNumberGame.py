import random

def thegame():

    theNumber = random.randint(1, 100)
    print("Guess the number I picked from one to one hundread")
    thegame(theNumber)

    theNumber
    attempts=0

    guess = int(input("Guess the number between 1 and 100: "))
    attempts += 1

    if guess < theNumber:
        print("Higher!")
        thegame(theNumber, attempts)
    elif guess > theNumber:
        print("Lower!")
        thegame(theNumber, attempts)
    else:
        print(f"Congratulations! You've guessed the number {theNumber} in {attempts} attempts!")


thegame()


# Doesnt even work, I broke the code and I dont really want to fix this (: