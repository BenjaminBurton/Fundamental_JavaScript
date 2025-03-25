// Define the character used to build the pyramid
const character = "#";

// Set the number of rows for the pyramid (height of the pyramid)
const count = 8;

// Initialize an empty array to store each row of the pyramid as a string
const rows = [];

// Flag to determine if the pyramid should be inverted (true = upside-down, false = right-side-up)
let inverted = true;

// Function to generate a single row of the pyramid, centered with spaces
// rowNumber: the current row number (1 to count)
// rowCount: the total number of rows (used for spacing)
function padRow(rowNumber, rowCount) {
  // Return a string with leading spaces, # characters, and trailing spaces
  // " ".repeat(rowCount - rowNumber): adds spaces before the # characters to center the row
  // character.repeat(2 * rowNumber - 1): adds the # characters (1 for row 1, 3 for row 2, etc.)
  // " ".repeat(rowCount - rowNumber): adds spaces after the # characters to center the row
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Method 1: Build a pyramid using a for loop with conditional unshift/push
// Loop from 1 to count (8 rows)
// TODO: use a different type of loop (e.g., replace with while or do-while loop)
for (let i = 1; i <= count; i++) {
  // Check if inverted flag is true
  if (inverted) {
    // If inverted, add the row to the start of the array (creates an upside-down pyramid)
    rows.unshift(padRow(i, count));
  } else {
    // If not inverted, add the row to the end of the array (creates a right-side-up pyramid)
    rows.push(padRow(i, count));
  }
}

// Method 2: Build a right-side-up pyramid using a while loop
// Continue adding rows until the array length reaches count (8 rows)
while (rows.length < count) {
  // Add a row to the end of the array using the current length + 1 as the row number
  rows.push(padRow(rows.length + 1, count));
}

// Method 3: Build an upside-down pyramid using a for loop
// Loop from count (8) down to 1 to create an upside-down pyramid
for (let i = count; i > 0; i--) {
  // Add each row to the end of the array, starting with the widest row
  rows.push(padRow(i, count));
}

// Initialize an empty string to store the final pyramid output
let result = "";

// Loop through each row in the rows array to build the output string
for (const row of rows) {
  // Concatenate each row with a newline character to create the pyramid shape
  result = result + row + "\n";
}

// Print the final pyramid to the console
console.log(result);