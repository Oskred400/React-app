//test connection to database TODO's


const express = require('express');

 

const app = express();

 
var mysql = require('mysql'); 

 

var http = require('http');

const cors = require('cors');
//web page

app.use(cors());


//define some routes
app.get('/', (req, res) => {
    //putput on window
    res.send("hello world from hellotest. go to /todo to see list of todos");
} );







//connection script pool
const connection = mysql.createPool({
    connectionLimit : 100,
    host: 'localhost',
    user: 'YOUR_USER_NAME',
    password: 'YOUR_PASSWORD',
    database: 'YOUR_DATABASE_NAME'
});

//create and verify connection 

connection.getConnection(error_stmt =>{
    if(error_stmt){
        return error_stmt;
    }
} );

//connection details

app.get("/connect", (req, res) => {
    res.send("connection to website created");
});


//log connection 

console.log(connection);

const sqlquery = "SELECT * FROM TODOS";

//query insert 

//sample values
const insertquery = "Insert into TODOS values('530c9aee-0361-42fa-bda4-4afeba57393a', 'Drink') ";
connection.query(insertquery, (err) => {
    if(err){
        console.log("error inserting");
    }
    else{
        console.log("inserted");
    }
});

const deletequery = "Delete from TODOS where title = 'Drink' ";

connection.query(deletequery, (err) => {
    if(err){
        console.log("error deleting");
    }
    else{
        console.log("deleted");
    }
} );

//addition of products 

app.get("/todo/add", (req, res) => {
    //query from requests

    const {id, title} = req.query;
    console.log(id, title);
    const insertquery = `INSERT INTO todos(id,title) VALUES(?,?)`;
    //connection script 
    connection.query(insertquery, [id, title] , (err, resultset) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send("added TODO");
        }
    })
    //res.send("adding todo");
});



app.get("/todo", (req, res) => { 
    connection.query(sqlquery, (err, resultset) => { 

        if(err){
            return res.send(err);
        }
        else{
            //data in json object 

            return res.json( {
                //data: resultset[0].id
                data: resultset
                

            } );
        }


    })

} )


//port



app.set('port', process.env.PORT || 5000);



/*
app.listen(5000, () => {
    console.log("Superb");
} );*/


http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port %s",  app.get('port'));
  });