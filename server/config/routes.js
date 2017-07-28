let path = require("path");
let Users = require("./../controllers/users");
let Appointments = require("./../controllers/appointments");

module.exports = function(app) {
  // User  routing
  app.get("/users", Users.index);
  app.post("/users", Users.create);
  app.get("/user/:id", Users.show);
  app.delete("/user/:id", Users.logout);

  // Session routing
  app.get("/session", Users.session);

  // appointment routing
  app.get("/appointment", Appointments.index);
  app.post("/appointment", Appointments.create);
  app.patch("/appointment/:id", Appointments.delete);

  // Path to the Angular Routing
  app.all("*", function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
};
