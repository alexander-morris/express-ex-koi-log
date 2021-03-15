// index.js
const Express = require('express');
const { joinKoi } = require('koi-logs');

var app = new Express ();

// add koi tasks
joinKoi(app);

// start the server listener
app.listen(process.env.PORT || 3000, () => {
  console.log(`[app] started on http://localhost:${process.env.PORT || 3000}`);
});