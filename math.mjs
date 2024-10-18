function add(a, b) { 
    return a + b; 
   } 
   module.exports = { add }; 
   // file: app.js 
   const math = require('./math.mjs'); // Import the math module 
   const sum = math.add(5, 3); 
   console.log('Sum:', sum); // Output: Sum: 8 
   export function add(a, b) { 
    return a + b; 
   }
   // file: app.js 
   import { add } from 'c:/Users/Kohin/Desktop/react-sample/math'; // Import the add function 
   const Sum = add(5, 3); 
   console.log('Sum:', sum); // Output: Sum: 8