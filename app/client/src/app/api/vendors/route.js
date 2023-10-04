import { NextResponse } from 'next/server'


export async function GET (){

   try {

    const randomId = Math.floor(Math.random() * (100 - 1) + 1) / 1;

    const res = await fetch(`http://${process.env.SERVER_HOST}:3000/api/v1/vendors/${randomId}`)       

    console.log (res)
    const data = await res.json()

    return NextResponse.json({ data })

   }catch(error){console.log(error)}
}