export type User = {
  url: string;
  username: string;
}

export type CalendarRow = {
  id: number;
  time: string;
  monday?: string | null;
  tuesday?: string | null;
  wednesday?: string | null;
  thursday?: string | null;
  friday?: string | null;
}

export type TaskRequest = {
  title: string;
  day: number;
  time: string;
  participiants: string[];
}

export type TaskDeleteRequest = { id: number }
