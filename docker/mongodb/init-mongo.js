db.createUser(
  // TODO Apply env var for user and password
  {
    user: "myproject",
    pwd: "1234",
    roles: [ { role: "readWrite", db: "myproject" } ]
  }
);

