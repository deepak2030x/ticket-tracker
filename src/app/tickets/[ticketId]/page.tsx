type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  return <h2 className="text-lg">Ticket page: {ticketId}</h2>;
};

export default TicketPage;
