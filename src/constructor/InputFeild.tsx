import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="container mt-4" onSubmit={(e) => handleAdd(e)}>
      <div className="row">
        <div className="col-md-11">
          <input
            type="text"
            placeholder="Enter Task"
            className="form-control"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-dark">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputFeild;
