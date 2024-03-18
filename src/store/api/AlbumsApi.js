import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const pause = (duration) => {
  const response = new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
  return response;
};

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    // fetchFn: async (arg) => {
    //   // allow you to override that function,replace it with whatever kind of fetching machanism you want to put it
    //   await pause(1000); // here im going to call a function delay 5 second pause
    //   return fetch(...arg);
    // },
  }),
  endpoints(builder) {
    return {
      //  DELETE METHOD
      removeAlbums: builder.mutation({
        invalidatesTags: (results, error, album) => {
          console.log(album, "A");
          return [{ type: "Album", id: album.userId }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
      // POST METHOD
      addAlbums: builder.mutation({
        // automatically refetching data we will add the  invalidatesTags and providesTags
        invalidatesTags: (results, error, user) => {
          return [{ type: "Album", id: user.id }];
        },

        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      //GET METHOD
      fetchAlbums: builder.query({
        providesTags: (results, error, user) => {
          return [{ type: "Album", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumsMutation,
  useRemoveAlbumsMutation,
} = albumsApi; // when we create a mutation or query its automatically generated the hook is going to have a name of mutation or query as well
export { albumsApi };
