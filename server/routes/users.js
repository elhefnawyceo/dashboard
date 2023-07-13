const express = require("express");
const route = express.Router();
const connection = require("../database");


route.get("/getusers", (req, res) => {
  try {
    connection.query("SELECT * FROM users", (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("An error occurred");
      } else {
        res.send(results);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
});

route.post('/adduser', (req, res) => {
  try {
    const { username, phone, email, password } = req.body;


    // console.log(username, phone, email, password)

    connection.query("SELECT email FROM users WHERE email = ?", [email], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("يوجد خطأ");
      } else {
        if (results.length > 0) {
          res.send("المستخدم مسجل بالفعل");
        } else {
          connection.query('INSERT INTO users (username, phone, email, password) VALUES (?,?,?,?)',
            [username, phone, email, password],
            (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).send("حدث خطأ أثناء إضافة المستخدم");
              } else {
              res.send("تم إنشاء الحساب  بنجاح");
              }
            }
          );
        }
      }
    });
    


  } catch (error) {

    console.log(error)

  }
})

route.post('loginUser' )


module.exports = route;
