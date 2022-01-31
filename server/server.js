const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'producton') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

app.listen(PORT, () => console.log(`🌎 Now listening on on localhost:${PORT}`));