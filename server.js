//const bookMethods = require("./routes/index")
const express = require('express');
const app = express();
const parser = require('body-parser');
//const MongoClient = require(mongodb).MongoClient;
//const mongodb = require('./db/connect');
var cors = require('cors');
//framework for authentication
const passport = require('passport');
const session = require('express-session');
const githubStrategy = require('passport-github2').Strategy


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(parser.json());

const port = 8080;

//set the cookie with name of: 'secret'
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}))


//setting the passport object
app.use(passport.initialize())

app.use(passport.session())

//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger-output.json');

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin, X-Requested-with, Content-Type, Accept, Z-key, Authorization');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PUT, PATCH, OPTIONS, DELETE'
  );
  next();
  
})

app.use(cors({methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']}));
app.use(cors({origin: '*'}));

app.use('/', require('./routes'));

const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`DB Connected and server running on ${port}.`);
    });
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });
  