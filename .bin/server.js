require("dotenv").config();
const app = require("../src/apis");

app.use((req, res, next)=>{
    next();
})
let port = process.env.PORT|| 5000;
app.listen(port);

console.log(`listening on ${port}`);