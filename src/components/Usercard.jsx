import React from "react";
import { Link } from "react-router-dom";
import { useDeleteUserMutation, useEditUserMutation } from "../redux/service/user-api";

export const Usercard = ({ name, email, id }) => {
  const [deleteUSer] = useDeleteUserMutation(id)
  const [editUSer] = useEditUserMutation()

  const editText = () =>{
    let person = prompt("Please enter your text" );
    
    editUSer({name: person, email,id})
  }
  return (
    <div className="border flex items-center justify-between m-3 p-5 border-black shadow-lg bg-slate-300 rounded-md h-[105px]">
      <div>
      <Link className="block" to={`/user/${id}`}>
        <h2 className="text-4xl">{name}</h2>
      </Link>
      <p>{email}</p>
      </div>
      <div className="flex gap-4">
        <button className="bg-green-600 text-white font-bold px-3 rounded-md h-[40px]" onClick={()=> editText()} >edit</button>
        <button className="bg-red-600 text-white font-bold px-3 rounded-md h-[40px]" onClick={()=> deleteUSer(id)}>delete</button>
      </div>
    </div>
  );
};
