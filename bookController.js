const db = require('../db');

const getAllBooks = async (req, res) => {
  // const getAllBooks = async (req, res) => {
  try {
    const books = await db.query('SELECT * FROM books');
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving books');
  }
}


  // get book by id logic 


  const getBookById = async (req, res) => {
    try {
      const { id } = req.params;
      const [book] = await db.query('SELECT * FROM books WHERE id = ?', [id]);
      if (!book) {
        return res.status(404).send('Book not found');
      }
      res.status(200).json(book);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving book');
    }
  };


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



module.exports = {
  getAllBooks,
  getBookById 
};