import TicketForm from "@/app/(components)/TicketForm";

const gitTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`);
   
    if (!res.ok) {
      throw new Error('Failed to get ticket');
    }
     return res.json();

  } catch (error) {
    console.error(error);
  }
}

const singleTicketPage = async ({ params }) => {
  const { id } = await params;
  console.log('id is', id)
  
  const editMode = id === 'new' ? false : true;

  let updateTicketData = {}
  
  if (editMode) { 
    updateTicketData = await gitTicketById(id);
    console.log(updateTicketData)
    
  }
  
  return (
   <TicketForm/>
  )
}
export default singleTicketPage;