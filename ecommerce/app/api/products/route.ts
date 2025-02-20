import { products } from "@/app/product-data"


export async function GET() {
    return new Response(JSON.stringify(products), {
        status : 201,
        headers : {
         'Content-Type' : 'application/json' 
        }
    })
}