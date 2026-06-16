"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Modal from "../../../../components/Modal/Modal";
import { fetchNoteById } from "../../../../lib/api";

import css from "./NotePreview.module.css";

interface NotePreviewProps {
  id: string;
}

const NotePreview = ({ id }: NotePreviewProps) => {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      {isLoading && <p>Loading, please wait...</p>}

      {(error || !note) && !isLoading && <p>Something went wrong.</p>}

      {note && (
        <div className={css.container}>
          <div className={css.item}>
            <button className={css.backBtn} onClick={handleClose}>
              Back
            </button>

            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>

            <p className={css.tag}>{note.tag}</p>

            <p className={css.content}>{note.content}</p>

            <p className={css.date}>{note.createdAt}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default NotePreview;
