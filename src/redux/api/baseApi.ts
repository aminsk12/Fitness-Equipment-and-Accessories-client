import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://fitness-equipment-and-accessories-server-phi.vercel.app/api/v1",
  }),
  tagTypes: ["product"],
  endpoints: () => ({}),
});
