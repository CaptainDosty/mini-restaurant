import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import Product from "../Compenents/Product";
import { DarkModeContext } from '../Context/DarkModeContex';

import db from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

function Home() {
  const [products, setProducts] = useState([]);
  const {darkMode} = useContext(DarkModeContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios('data.json');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(()=>
  onSnapshot(collection(db,"products"), (snapshot) => {
      (snapshot.docs.map(doc=> doc.data()))
    }) 
  );
  
 

  

  return (
  <div className={darkMode ? `flex flex-wrap justify-between bg-slate-800` : `flex flex-wrap justify-between  bg-white`}>
      
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Home;

