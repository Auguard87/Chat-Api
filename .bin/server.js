require("dotenv").config();
const app = require("../src/apis");

app.use((req, res, next)=>{
    next();
});
console.log(process.env.API_PORT);
let port = process.env.API_PORT|| 3001;
app.listen(port);

console.log(`listening on ${port}`);