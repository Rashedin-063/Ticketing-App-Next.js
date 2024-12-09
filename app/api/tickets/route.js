// import connectDB from "@/lib/connectDB";
import Ticket from "../../(models)/ticket";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({tickets}, {status: 200});
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function POST(req) {
  
  try {
    const body = await req.json();

    const ticketData = body.formData;
    
    await Ticket.create(ticketData);

    return NextResponse.json({ message: 'Ticket created successfully' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500})
  }
}

