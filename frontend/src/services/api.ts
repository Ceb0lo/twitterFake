import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/'
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login/',
        method: 'POST',
        body: credentials
      })
    }),

    register: builder.mutation({
      query: (body) => ({
        url: 'users/register/',
        method: 'POST',
        body
      })
    }),

    search: builder.query({
      query: (q: string) => `search/?q=${q}`
    }),

    editProfile: builder.mutation({
      query: ({ username, data }: { username: string; data: any }) => ({
        url: `/users/${username}/`,
        method: 'PATCH',
        body: data
      })
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useSearchQuery,
  useEditProfileMutation
} = api
