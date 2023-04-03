import React, {useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

const CreateProduct = () => {
  const [value, setValue] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

   const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value)
   }

    return (
        <form onSubmit={submitHandler}>
            <input type="text"
            className="border py-2 px-4 mb-2 w-full outline-0"
            placeholder="Enter product title"
                   onChange={changeHandler}
            />
            <button className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    );
};

export default CreateProduct;