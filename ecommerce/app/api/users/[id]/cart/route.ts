import { NextRequest } from "next/server";
import { products } from "@/app/product-data";
import { json } from "stream/consumers";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { request } from "http";

type ShoppingCart = Record<string , string[]>

const carts = {
    '1':['123', '234'] ,
    '2':['345', '456'] ,
    '3':['234'] ,
}

type Params = {
    id : string;
}

export async function GET(request: NextRequest, { params }: { params:  Params  }) {
    const userId = params.id;
    const productsIds = carts[userId];  //used to extract user id

    if (productsIds === undefined) {
        return new Response(JSON.stringify( [] ) , {
            status:200,
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    const cartProdcuts = productsIds.map(id => products.find(p => p.id === id));
    
    return new Response(JSON.stringify(cartProdcuts) , {
        status:200,
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

type CartBody = {
    productId : string;
}

export async function POST(request: NextRequest, { params }: { params:  Params  }){
    const userId = params.id;
    const body : CartBody = await request.json(); //converts request payload into javascript object
    const productId = body.productId;

    carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId];
    const cartProdcuts = carts[userId].map(id => products.find(p => p.id === id));

    return new Response(JSON.stringify(cartProdcuts) , {
        status : 201 ,
        headers : {
            "Content-Type" : "application/json"
        }
    })
}

export async function DELETE(request: NextRequest, { params }: { params:  Params  }) {
    const userId = params.id;
    const body: CartBody = await request.json();
    const productId = body.productId;

    if (!carts[userId]) {
        return new Response("User Doesnt Exist" , {
            status : 404,
            headers : {
                "Content-Type" : "application/json"
            }
        })
    }

    carts[userId] = carts[userId] ? carts[userId].filter(id => id !== productId) : [];

    const cartProdcuts = carts[userId].map(id => products.find(p => p.id === id)) || [];

    return new Response(JSON.stringify(cartProdcuts) , {
        status:200,
        headers:{
            "Content-Type" : "application/js"
        }
    })
}


