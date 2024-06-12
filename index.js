const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017/";
const dbName = "555";
const collectionName = "555";

async function createDatabase() {
  const client = new MongoClient(url);

  
    console.log("Kapcsolódási kísérlet...");
    await client.connect();
    console.log("Kapcsolat létrehozva a MongoDB szerverhez");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    console.log(`Adatbázis létrehozva: ${dbName}`);
    console.log(`Gyűjtemény létrehozva: ${collectionName}`);

    const document = { name: "555", address: "555" };
    const result = await collection.insertOne(document);
    console.log(`Dokumentum beszúrva: ${result.insertedId}`);


    await client.close();
    console.log("Kapcsolat lezárva");

}

createDatabase();

