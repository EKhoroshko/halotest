import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from './redax/product/operation';
import Container from './components/Container/Container'
import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);


  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
