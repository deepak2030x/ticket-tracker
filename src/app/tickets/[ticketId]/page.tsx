import { notFound } from "next/navigation";

// import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTickets } from "@/features/ticket/queries/get-tickets";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  // const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  const tickets = await getTickets();
  const ticket = tickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    notFound();
  }
  return (
    <div className="flex justify-center animate-fade-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
