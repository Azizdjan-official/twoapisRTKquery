import React from "react";
import { useForm } from "react-hook-form";
import {
  useGetTodoQuery,
  usePostTodosMutation,
} from "../redux/service/todo-api";
import { Card } from "../components/card";

export const Home = () => {
  const { register, reset, handleSubmit } = useForm();
  const [page, setPage] = React.useState(1);
  const [postTodo] = usePostTodosMutation();

  const { data, isLoading } = useGetTodoQuery(page);

  const submit = (data) => {
    postTodo(data)
      .unwrap()
      .then((res) => {
        console.log(res);
      });
    reset();
  };
  const buttons = Array(data?.pageSize).fill(null);

  return (
    <div >
        <h1 className="text-3xl text-center font-bold">Todo Lists</h1>

      <div className="flex flex-col justify-center items-center my-3 ">
        <form className="w-[60%] p-5 bg-slate-600 shadow-lg border border-white rounded-lg"  onSubmit={handleSubmit(submit)}>
          <div className="mb-3">
            <input
              className="py-2 w-full border px-2 border-blue-500"
              {...register("title", { required: true })}
              placeholder="title"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <input
            required
              className="py-2 w-full border px-2 border-blue-500"
              {...register("description", { required: true })}
              placeholder="description"
              type="text"
            />
          </div>
          <div className="flex  justify-center">
            <button className="bg-blue-500 text-white rounded-md font-bold p-2 w-[50%]" type="submit">
              send
            </button>
          </div>
        </form>
      </div>
      <div className="h-[49vh] my-4">
      {isLoading ? (
        <h1 className="text-4xl">Loading...</h1>
      ) : (
        <>
          {data?.data?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </>
      )}
      </div>
      <div className="flex items-center justify-center gap-3">
        {buttons.map((_, index) => {
          let number = index + 1;
          return (
            <button
              onClick={() => setPage(number)}
              className={`p-3 bg-red-400 ${
                number === page ? "bg-blue-400" : ""
              }`}
              key={number}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
};
