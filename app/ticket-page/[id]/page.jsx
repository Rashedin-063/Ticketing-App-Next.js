import TicketForm from "@/app/(components)/TicketForm";

const gitTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('Failed to get ticket');
    }

  } catch (error) {
    console.error(error);
  }
}

const singleTicketPage = async ({ params }) => {
  const { id } = await params;
  const editMode = id === 'new' ? false : true;

  let updateTicketData = {}
  
  if (editMode) { 
    updateTicketData = await gitTicketById(params.id);
    console.log(updateTicketData)
    
  }
  
  return (
   <TicketForm/>
  )
}
export default singleTicketPage;