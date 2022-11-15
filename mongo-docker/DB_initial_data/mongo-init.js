// create mongodb user
db.createUser(
    {
      user: "dataset_devuser",
      pwd:  "dev63784_Dataset",
      roles: [ { role: "readWrite", db: "datasetDB" } ],
      mechanisms:["SCRAM-SHA-1"]
    }
  );
