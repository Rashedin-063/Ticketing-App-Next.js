import TicketCard from "./(components)/TicketCard";


const getTickets = async () => {
 try {
   const res = await fetch('http://localhost:3000/api/tickets');
   return res.json();
 } catch (error) {
  console.error('Failed to get tickets', error);
 }
}

export default async function Dashboard() {
  
  const {tickets} = await getTickets();

  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-2 xl:grid-cols-4 '>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
}
