import jsonServer from 'json-server';
import auth from 'json-server-auth';
import express from 'express';

const app = express();
const router = jsonServer.router('db.json');

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(auth);
app.use(router);

app.listen(8000, () => {
  console.log('JSON Server is running on http://localhost:8000');
});
