// === Function to sanitize input ===
function sanitize(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

// === Console outputs ===
console.log('sanitize("1"):', sanitize("1")); // Expected: "1"
console.log('sanitize("NotANumber"):', sanitize("NotANumber")); // Expected: NaN

// === NaN Comparisons ===
console.log("NaN === NaN:", NaN === NaN); // false
console.log("Number.NaN === NaN:", Number.NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("isNaN(Number.NaN):", isNaN(Number.NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true

// === Custom isNaN Check ===
function valueIsNaN(v) {
  return v !== v;
}
console.log("valueIsNaN(1):", valueIsNaN(1)); // false
console.log("valueIsNaN(NaN):", valueIsNaN(NaN)); // true
console.log("valueIsNaN(Number.NaN):", valueIsNaN(Number.NaN)); // true
