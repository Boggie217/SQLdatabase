const db = require('../db');

const getAuthorById = async (req, res) => {
    try {
      const { id } = req.params;
      const [author] = await db.query('SELECT * FROM authors WHERE id = ?', [id]);
      if (!author) {
        return res.status(404).send('Author not found');
      }
      res.status(200).json(author);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving author');
    }
  };
  

  const getAllAuthors = async (req, res) => {
    try {
      const [author] = await db.query('SELECT * FROM authors');
      res.status(200).json(authors);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving authors');
    }
  };



//post

const createAuthor = async (req, res) => {
    // Insert author into DB
  }; 





//update


const updateAuthor = async (req, res) => {
    // Update author by ID in DB  
  };
  


//delete


const deleteAuthor = async (req, res) => {
    // Delete author by ID from DB
  };





module.exports = {
    createAuthor,
    getAuthorById,
    getAllAuthors,
    updateAuthor,
    deleteAuthor
};