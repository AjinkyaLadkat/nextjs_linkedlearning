import { connectToDb } from "../db"



export async function GET() {

    const { db } = await connectToDb();
    const products = await db.collection('products').find({}).toArray(); 

    return new Response(JSON.stringify(products), {
        status : 201,
        headers : {
         'Content-Type' : 'application/json' 
        }
    })
}