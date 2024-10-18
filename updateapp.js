// app.js 
const express = require('express'); 
const app = express(); 
app.use(express.json()); // Middleware to parse JSON bodies 
const PORT = 3000; 
// Sample data 
let items = [ 
 { id: 1, name: 'Item 1' }, 
 { id: 2, name: 'Item 2' } 
]; 
// GET: Retrieve all items 
app.get('/items', (req, res) => { 
 res.status(200).json(items); 
}); 
// GET: Retrieve a single item by ID 
app.get('/items/:id', (req, res) => { 
 const item = items.find(i => i.id === parseInt(req.params.id)); 
 if (item) { 
 res.status(200).json(item); 
 } else { 
 res.status(404).send('Item not found'); 
 } 
}); 
// POST: Create a new item 
app.post('/items', (req, res) => { 
 const newItem = { 
 id: items.length + 1, 
 name: req.body.name 
 }; 
 items.push(newItem); 
 res.status(201).json(newItem); 
}); 
// PUT: Update an item 
app.put('/items/:id', (req, res) => { 
 const item = items.find(i => i.id === parseInt(req.params.id)); 
 if (!item) return res.status(404).send('Item not found'); 
 item.name = req.body.name; 
 res.status(200).json(item); 
}); 
// DELETE: Delete an item 
app.delete('/items/:id', (req, res) => { 
 const index = items.findIndex(i => i.id ===
parseInt(req.params.id)); 
 if (index === -1) return res.status(404).send('Item not found'); 
 const deletedItem = items.splice(index, 1); // Remove the item
 res.status(204).send(); // 204 No Content 
}); 
// Start the server 
app.listen(PORT, () => { 
 console.log(`Server is running at http://localhost:3000`); 
}); 