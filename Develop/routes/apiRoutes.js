const fs = require('fs');
const { v4: uuidv4 } = require('uuid')
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
    fs.readFile('./db/db.json', 'utf8', (error, response) => {

      //convertting the response into a JSON object, 
      let data = JSON.parse(response);
      //to send it back to the HTML Page 
      if (error) {
        console.error(error);
      }
      else {
        //Write the updated value in the file 

        console.log("New notes is ", req.body);
        // Creating new unique id
        const noteId = uuidv4();

        //combine allinformation 
        console.log('combine', { ...req.body, id: noteId });
        let newwNote = { ...req.body, id: noteId };

        let newList = [...data, newwNote]; 

        fs.writeFile('./db/db.json', JSON.stringify(newList), err => {
          if (err) { console.log(err); }
          else {
            console.log("updated json file successfully");
            res.json(newList); 
          }

        })


      }

    });


  });

  // API DELETE REQUEST - BONUS 

  app.delete('/api/notes/:id', (req, res) => {

  });
};
