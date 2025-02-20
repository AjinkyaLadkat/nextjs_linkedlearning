export async function GET() {
    return new Response("hello from a next.js route handler" , {
        status : 200,
    });
}

export async function POST() {
    return new Response("thnx for posting on this handler" , {
        status : 200,
    });
}

