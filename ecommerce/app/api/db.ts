import { MongoClient, ServerApiVersion } from 'mongodb';

// ladkatajinkya18
// mybkW9Hb2x2t3AfN

export async function connectToDb() {

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qxm6m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


    try {
        await client.connect();
    } finally {
        await client.close();
    }


}
