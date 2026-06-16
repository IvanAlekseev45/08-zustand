import axios from "axios";

import type { Note } from "../types/note";

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface FetchNotesParams {
  search: string;
  page: number;
  perPage: number;
  tag?: string;
}

export interface CreateNoteData {
  title: string;
  content: string;
  tag: Note["tag"];
}

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const notes = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const fetchNotes = async (
  search: string,
  page: number,
  tag?: string,
): Promise<FetchNotesResponse> => {
  const params: FetchNotesParams = {
    search,
    page,
    perPage: 12,
  };
  if (tag) {
    params.tag = tag;
  }

  const { data } = await notes.get<FetchNotesResponse>("/notes", { params });

  return data;
};

export const createNote = async (newNote: CreateNoteData): Promise<Note> => {
  const { data } = await notes.post<Note>("/notes", newNote);

  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await notes.delete<Note>(`/notes/${id}`);

  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await notes.get<Note>(`/notes/${id}`);

  return data;
};

export default fetchNotes;
