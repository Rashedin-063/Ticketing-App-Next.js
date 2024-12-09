import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
 try {
   const res = await fetch(
     `https://ticketing-app-nextjs.vercel.app/api/tickets`
   );
   
   return res.json();
 } catch (error) {
  console.error('Failed to get tickets', error);
 }
}

export default async function Dashboard() {
  
  const { tickets } = await getTickets();
  
  const uniqueCategories = [
    ...new Set(tickets.map((ticket) => ticket.category)),
  ]
  

  return (
    <div className='p-5'>
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className='mb-4'>
              <h2>{uniqueCategory}</h2>
              <div className='lg:grid grid-cols-2 xl:grid-cols-4 '>
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
