CREATE DATABASE music_library;
USE music_library;

CREATE TABLE music (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    album VARCHAR(255),
    genre VARCHAR(255) NOT NULL,
    year INT,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

-- adding initial data
INSERT INTO music (title, artist, genre, year)
VALUES
("Destiny", "Dem 2", "UKG", 1998),
("Try me out", "Sunship", "UKG", 1999);