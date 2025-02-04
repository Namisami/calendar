import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CalendarRow, User } from "./base.types";

export const baseApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users/'
    }),
    getTasksByUsername: builder.query<CalendarRow[], { username: string }>({
      query: (params) => ({
        url: 'tasks/schedule/',
        params,
      })
    })
  })
})

export const {
  useGetUsersQuery,
  useLazyGetTasksByUsernameQuery,
} = baseApi;
