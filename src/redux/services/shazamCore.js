import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','8993388464mshf5065643c712524p15a48fjsn75dcf75bfe68')

            return headers;
        }
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'charts/world' }),
    })
})

export const { useGetTopChartsQuery } = shazamCoreApi