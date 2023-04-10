import React, {useContext} from 'react';
import {ModalContext} from "../context/ModalContext";
import {useProducts} from "../hooks/products";
import {IProduct} from "../models";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";

const ProductsPage = () => {
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
};

export default ProductsPage;