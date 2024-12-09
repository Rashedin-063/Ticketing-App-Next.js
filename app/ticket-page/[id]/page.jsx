import TicketForm from "@/app/(components)/TicketForm";

const singleTicketPage = async({ params }) => {
  const { id } = await params;
  return (
   <TicketForm/>
  )
}
export default singleTicketPage;