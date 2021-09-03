const fs = require('fs');
// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.

  //retrive all notes from JSON file using FS module 
  app.get('/api/notes', (req, res) => {
    // Return the contents of 'data.csv' as a string in the variable "data"
    // "utf8" encodes the raw buffer data in human-readable format 


    fs.readFile('./db/db.json', 'utf8', (error, response) => {

      //convertting the response into a JSON object, 
      let data = JSON.parse(response);
      //to send it back to the HTML Page 
      error ? console.error(error) : res.json(data);
    });

  });



  // API POST Requests

  app.post('/api/notes', (req, res) => {

  });

  // API DELETE REQUEST - BONUS 

  app.delete('/api/notes/:id', (req, res) => {

  });
};
