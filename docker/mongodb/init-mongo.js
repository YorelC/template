db.createUser(
  {
    user: "admin",
    pwd: "UN_PASS_WORD_TO_FUFU",
    roles: [ { role: "root", db: "admin" } ]
  }
);