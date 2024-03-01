import React from "react";
import { Link } from "react-router-dom";
import { useDeleteUserMutation } from "../redux/service/todo-api";

export const Card = ({ description, title, id }) => {
  const [deleteUSer] = useDeleteUserMutation(id)
  return (
    <div className="border flex items-center justify-between m-3 p-5 border-black shadow-lg bg-slate-300 rounded-md h-[105px]">
      <div>
        <Link className="block" to={`/todo/${id}`}>
          <h2 className="text-4xl">{title}</h2>
        </Link>
        <p>{description}</p>
      </div>

      <div className="flex gap-4">
        <button className="bg-green-600 text-white font-bold px-3 rounded-md h-[40px]" >edit</button>
        <button className="bg-red-600 text-white font-bold px-3 rounded-md h-[40px]" onClick={()=> deleteUSer(id)}>delete</button>
      </div>
    </div>
  );
};
