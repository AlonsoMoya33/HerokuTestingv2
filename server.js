const exp = require('constants');
let express = require ('express');
let app = express();
 
app.use(express.static(__dirname+'/dist/contact'));
app.get('/*', (req,resp)=>{
    resp.sendFile(__dirname+'/dist/contact/index.html');
});

app.listen(process.env.PORT || 8080);
