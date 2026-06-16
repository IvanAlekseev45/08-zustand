import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { fetchNoteById } from "../../../lib/api";
import NoteDetailsClient from "./NoteDetails.client";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const generateMetadata = async ({ params }: PageProps) => {
  const { id } = await params;

  const note = await fetchNoteById(id);

  const metadata: Metadata = {
    title: note.title,
    description: note.content,
    openGraph: {
      title: note.title,
      description: note.content,
      url: `https://notehub.vercel.app/notes/${id}`,
      images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
    },
  };
  return metadata;
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient id={id} />
    </HydrationBoundary>
  );
};

export default Page;
