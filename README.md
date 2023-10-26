# node-web-api
Collection of web apis with nodejs


The following table shows overview of the Rest APIs that will be exported:

| Methods | Urls                     | Actions                                      |
| ------- | ------------------------ | -------------------------------------------- |
| GET     | api/tutorials            | get all Tutorials                            |
| GET     | api/tutorials/:id        | get Tutorial by id                           |
| POST    | api/tutorials            | add new Tutorial                             |
| PUT     | api/tutorials/:id        | update Tutorial by id                        |
| DELETE  | api/tutorials/:id        | remove Tutorial by id                        |
| DELETE  | api/tutorials            | remove all Tutorials                         |
| GET     | api/tutorials/published  | find all published Tutorials                 |
| GET     | api/tutorials?title=[kw] | find all Tutorials which title contains 'kw' |

- Download mysql
- Create database called testdb
- Create table as follows
  
`
CREATE TABLE IF NOT EXISTS `tutorials` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;`
`