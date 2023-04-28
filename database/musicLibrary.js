const mysql = require("mysql2");

// creating connection to database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORTNUMBER,
});

// enabling connection pool to use async/await
const db = pool.promise();

// NOTE: mysql query returns ROWS(an array of objects(rows in table)) & FIELDS(metadata about fields in the table) --> we only need ROWS so deconstruct array result

// GET all tracks (rows)
const getTracks = async () => {
  const query = "SELECT * FROM music";
  const [rows] = await db.query(query);
  return rows;
};

// GET one track (row)
const getTrack = async (id) => {
  const query = "SELECT * FROM music WHERE id = ?";
  const [ rows ] = await db.query(query, [id]);
  // only 1 result/track thus return 1st object in rows array
  return rows[0];
};

// SEARCH - by letter input
const searchFunc = async (searchTerm) => {
  let text = `${searchTerm}%`;
  const query = "SELECT * FROM music WHERE artist LIKE ? OR title LIKE ?";
  const [rows] = await db.query(query, [text, text]);
  return rows;
};

// ADD track (row)
const addTrack = async (title, artist, album, genre, year) => {
  const query = `INSERT INTO music (title, artist, album, genre, year) VALUES (?,?,?,?,?)`;
  await db.query(query, [title, artist, album, genre, year]);
};

// DELETE track (row)
const deleteTrack = async (trackId) => {
  const query = "DELETE FROM music WHERE id = ?";
  await db.query(query, [trackId]);
};

// UPDATE track
const updateTrack = async (title, artist, album, genre, year, trackId) => {
  const query = `
  UPDATE music
  SET title = ?, artist = ?, album = ?, genre = ?, year = ?
  WHERE id = ?
  `;
  await db.query(query, [title, artist, album, genre, year, trackId]);
};

// Testing connection
pool.getConnection((err, connection) => {
  if (err) {
    console.log(`Error connecting to database: ${err.code}: ${err.message}`);
  } else {
    console.log("\x1b[34m", "Successfull database connection!");
    connection.release();
  }
});

module.exports = {
  getTrack,
  getTracks,
  addTrack,
  searchFunc,
  deleteTrack,
  updateTrack
};