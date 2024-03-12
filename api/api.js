const express = require("express");
const mysql = require("mysql");


const apiroute = express.Router();
const dbjson = require("./dbconfig.json");



apiroute.use(express.json())
apiroute.use(express.urlencoded({ extended: true }))



const dbcontaction = mysql.createPool(dbjson);

//  /form/

apiroute.post('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;



    const columns = Object.keys(req.body).join(', ');

    const values = Object.values(req.body).map(value => `'${value}'`).join(', ');

    console.log(tablenm, req.body, `INSERT INTO ${tablenm} (${columns})
    VALUES (${values})`)





    dbcontaction.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`INSERT INTO ${tablenm} (${columns})
        VALUES (${values})`, (error, result) => {
            if (error) throw console.log("첫번째 쿼리문 오류" + error)
            res.send({ msg: "i" })
            console.log(result)
            connect.release(); // 연결 해제
        })
    })
})






module.exports = apiroute;