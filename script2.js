// Define the character used to build the pyramid (changed to "!" for this version)
const character = "!";

// Set the number of rows for the pyramid (height of the pyramid, increased to 10 rows)
const count = 10;

// Initialize an empty array to store each row of the pyramid as a string
const rows = [];

// Flag to determine if the pyramid should be inverted (false = right-side-up, true = upside-down)
// Set to false, so the pyramid will be right-side-up
let inverted = false;

// Function to generate a single row of the pyramid, centered with spaces
// rowNumber: the current row number (1 to count)
// rowCount: the total number of rows (used for spacing)
function padRow(rowNumber, rowCount) {
  // Return a string with leading spaces, ! characters, and trailing spaces
  // " ".repeat(rowCount - rowNumber): adds spaces before the ! characters to center the row
  // character.repeat(2 * rowNumber - 1): adds the ! characters (1 for row 1, 3 for row 2, etc.)
  // " ".repeat(rowCount - rowNumber): adds spaces after the ! characters to center the row
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Build the pyramid using a for loop with conditional unshift/push
// Loop from 1 to count (10 rows)
for (let i = 1; i <= count; i++) {
  // Check if inverted flag is true
  if (inverted) {
    // If inverted, add the row to the start of the array (would create an upside-down pyramid)
    rows.unshift(padRow(i, count));
  } else {
    // If not inverted, add the row to the end of the array (creates a right-side-up pyramid)
    // Since inverted = false, this block runs, building the pyramid from narrow to wide
    rows.push(padRow(i, count));
  }
}

// Initialize an empty string to store the final pyramid output
let result = "";

// Loop through each row in the rows array to build the output string
for (const row of rows) {
  // Concatenate each row with a newline character to create the pyramid shape
  result = result + row + "\n";
}

// Print the final pyramid to the console program end

console.log(result);