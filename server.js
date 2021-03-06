const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() =>{
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });  
});
