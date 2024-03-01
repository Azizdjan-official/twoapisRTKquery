import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
    headers: { Autorization: "wuefoineifh0283" },
  }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: (page = 1) => {
        return {
          url: "/users",
          params: { _page: page, _limit: 3 },
        };
      },
      providesTags: ["get-users"],
      transformResponse: (data, res) => {
        const totalCount = res?.response?.headers?.get("X-total-count");
        const pageSize = parseInt(Number(totalCount) / 3) + 1;
        return { data, pageSize };
      },
    }),
    getSingleUserData: build.query({
      query: (id) => {
        return {
          url: `/users/${id}`,
        };
      },
      invalidatesTags: ["get-users"],
    }),
    postUsers: build.mutation({
      query: (data) => {
        return {
          url: "/users",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["get-users"],
    }),
    deleteUser:build.mutation({
      query: (id)=>{
        return {
          url: `/users/${id}`,
          method: "DELETE",
          body: id
        }
      },
      invalidatesTags: ["get-users"],
    }),
    editUser:build.mutation({
      query:(data)=>{
        return{
          url: `users/${data.id}`,
          method: "PATCH",
          body: data
        }
      },
      invalidatesTags: ["get-users"],
    })
  }),
});

export const { useGetUsersQuery, useGetSingleUserDataQuery,usePostUsersMutation, useDeleteUserMutation,useEditUserMutation } = userApi;
