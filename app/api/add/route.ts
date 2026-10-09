import {NextResponse} from "next/server"; 

export async function POST(request: Request){   
    const data = await request.json() // get data from frontend
    return NextResponse.json({ success: true, data }) // return data to frontend
}