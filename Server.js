const express = require('express');
const mysql = requre('mysql2');
const bodyparser =require('body-parser');

const app =express();
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

const connection =mysql.creatconnection({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'pertemuan5'

});
connection.connect((err) => {
    if(err) {
        console.error("terjadi kesalahan dalam koneksi ke MySql:", err.stack);
        return;

    }

        console.log("koneksi MySql berhasil dengan id" + connection.threadId)
    {

    }
    
    });
    app.set('view engine','ejs');

    //ini adalah routing (creat, read, uptade, delete)
    app.get('/',(req, res) =>{
const query = 'SELECT * FROM users';
connection.query(query,(err,results) =>{
    res.render('index',{usser:results})
});

app.listen(3000,() =>(
    console.log("server berjalan di port 3000, buka web melalui http://localhost:3000")
))
//update
app.get('/edit/: (req, res')=> {
    if(err) thouw err;
    res.redirect('/');
}
    });
    //Creat/input/insert
    addEventListener.post('add'req, res) => {
        const{name, email,phone } =req.body;
        const query = 'INSERT INTO users (name, email, phone) (, ?, ? )';
        connection.query(express.query, {name, email, phone},(err, result) => {
            if(err)throw err;
            res.redirect('/');
        })
    }