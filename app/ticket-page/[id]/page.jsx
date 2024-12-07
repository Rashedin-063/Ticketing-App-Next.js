const singleTicketPage = async({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-3xl text-center text-indigo-700 py-24">This is the page of ticket {id}</h1>
     
    </div>
  )
}
export default singleTicketPage;