-- Active: 1705368609238@@localhost@5432@api_nominaciones@public
create table tbl_oscars
(
    id SERIAL PRIMARY KEY,
    pelicula VARCHAR (500),
    actor VARCHAR(100),
    creado TIMESTAMP DEFAULT current_timestamp
);


INSERT into tbl_oscars
(pelicula, actor)
VALUES
('Oppenheimer', 'Cillian Murphy'),
('Maestro' , 'Bradley Cooper '),
('Los que se quedan' , 'Paul Giamatti'),
('American Fiction' , 'Jeffrey Wright'),
('Rustin' , 'Colman Domingo ');

SELECT * from tbl_oscars