// create mongodb user
db.createUser(
    {
      user: "quiz_devuser",
      pwd:  "dev63784_Quiz",
      roles: [ { role: "readWrite", db: "quizDB" } ],
      mechanisms:["SCRAM-SHA-1"]
    }
  );
