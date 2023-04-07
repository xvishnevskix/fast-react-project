import React, {useContext, useEffect, useState} from 'react';
import Loader from './components/Loader';
import {useProducts} from "./hooks/products";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import {IProduct} from "./models";
import {ModalContext} from "./context/ModalContext";


function App() {

  const {modal, open, close} = useContext(ModalContext)

  const {loading, items, addProduct} = useProducts()


  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader/>}
        {items}
        {modal && <Modal title="Create new product" onClose={() => close()}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
        <button className="fixed bottom-14 right-8 rounded-full bg-red-700 text-white text-2xl px-4 py-2" onClick={() => open()}>+</button>
    </div>
  );
}

export default App;
