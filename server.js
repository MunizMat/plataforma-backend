require('dotenv').config();
const app = require('./app').app;
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Access: http://localhost:${port}`)
})