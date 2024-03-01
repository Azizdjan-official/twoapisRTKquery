import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleUserDataQuery } from "../redux/service/user-api";

export const SingleUserData = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleUserDataQuery(id);

  return (
    <div className="container">
      {isLoading ? (
        <h1 className="text-4xl">Loading...</h1>
      ) : (
        <div>
          <h2>{data?.name}</h2>
        </div>
      )}
    </div>
  );
};
