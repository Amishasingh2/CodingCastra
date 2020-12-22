const express = required('express');
const app = express();
const path = required('path');
const forceSSL = function (){
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto']!== 'https')
        {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}

app.use(express.static(__dirname + '/dist/CodingCastra'));

app.get('/', function(req,res)
{
    res.sendFile(path.join(__dirname + '/dist/CodingCastra/index.html'));

});
//Start the app by listening
app.listen(process.env.PORT || 8080);