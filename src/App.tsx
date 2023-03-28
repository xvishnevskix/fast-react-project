import React, {useEffect, useState} from 'react';
import {useProducts} from "./hooks/products";


function App() {

  const {loading, items} = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
        {loading && <p className="text-center">Loading...</p>}
        {items}
    </div>
  );
}

export default App;
