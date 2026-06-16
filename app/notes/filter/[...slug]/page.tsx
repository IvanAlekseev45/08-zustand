import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import fetchNotes from "../../../../lib/api";
import NotesClient from "./Notes.client";
interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", "", 1, tag],
    queryFn: () => fetchNotes("", 1, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
};

export default Page;
