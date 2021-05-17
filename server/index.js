import express from 'express';
import bodyParser from 'body-parser';

import UserInfo from "./db/schemas/userInfo.js";
import Menu from "./db/schemas/menu.js";

const app = express();

app.use(
    bodyParser.json()
);

app.post('/api/create-menu', (req, res) =>{
    let {title, linkTitle} = req.body;

    Menu.create({
        title,
        linkTitle
    }, error  => {
        if (error) {
            console.log(error);
            return res.json({
                status: 502
            });
        }

        return res.json({
            status: 200
        });
    });

});

app.get('/api/create-menu', (req, res) => {
    Menu.find({})
        .exec(function (error, result){
            res.json(result);
        });
});

app.post('/api/create-info', (req, res) =>{
    let {name, lastName} = req.body;

    UserInfo.create({
        name,
        lastName
    }, error  => {
        if (error) {
            console.log(error);
            return res.json({
                status: 502
            });
        }

        return res.json({
            status: 200
        });
    });

});

app.get('/api/create-info', (req, res) => {
   UserInfo.find({})
       .exec(function (error, result){
           res.json(result);
       });
});


app.listen(4002, () => {
    console.log('dfd');
});