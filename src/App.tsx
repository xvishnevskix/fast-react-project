import React, {useEffect, useState} from 'react';
import Loader from './components/Loader';
import {useProducts} from "./hooks/products";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";


function App() {

  const {loading, items} = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader/>}
        {items}
      <Modal title="Create new product">
          <CreateProduct/>
      </Modal>
    </div>
  );
}

export default App;
