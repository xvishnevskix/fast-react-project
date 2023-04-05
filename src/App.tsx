import React, {useEffect, useState} from 'react';
import Loader from './components/Loader';
import {useProducts} from "./hooks/products";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import {IProduct} from "./models";


function App() {

  const {loading, items, addProduct} = useProducts()
    const [modal, setModal] = useState(true)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader/>}
        {items}
        {
            modal && (<Modal title="Create new product">
                <CreateProduct onCreate={createHandler}/>
            </Modal>)
        }
    </div>
  );
}

export default App;
