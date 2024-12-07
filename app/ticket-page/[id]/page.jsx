const singleTicketPage = async({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1>This is the page of ticket {id}</h1>
    </div>
  )
}
export default singleTicketPage;