const fs = require('fs');
// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.


  app.get('/api/notes', (req, res) => {

  });

  

  // API POST Requests
  
  app.post('/api/notes', (req, res) => {
    
  });

  // API DELETE REQUEST - BONUS 

  app.delete('/api/notes/:id', (req, res) => {
    
  });
};
