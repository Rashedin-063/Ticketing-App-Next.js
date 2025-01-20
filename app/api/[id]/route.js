import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
  try {
    const { id } = params;
    
    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json({foundTicket}, {status: 200});
  } catch (error) {
     return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
  
}

export async function DELETE(req, { params }) {
  const {id} = params;
  try {
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Ticket deleted successfully' }, {status: 200});
  } catch (error) {
    return NextResponse.json({message: 'Error', error}, {status: 500})
  }
}