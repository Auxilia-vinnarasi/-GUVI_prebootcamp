let value = prompt('How many runs you scored in this ball');
if (value === "4") {
      console.log("You hit a Four");
} else if (value ==="6") {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

/*we should not use identity operator(===)when we compare values of two different data types.
fix would be either we have to use equality operator(==) or we can give 4 and 6 as string ("4","6")*/