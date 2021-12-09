import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/slices/database/index";
import { Spinner } from "../styles/spinnerStyleComp";
import { FilterBar, GlobalStyle, ProductCont } from "../styles/StyledComp";
import Product from "./Product";

function App() {
  const [sortPrice, setSortPrice] = useState(null);
  const [search, setSearch] = useState("");
  const { data } = useSelector((state) => state.database);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    if (target.value === "sortBy") {
      setSortPrice(null);
    } else {
      setSortPrice(target.value);
    }
  };

  const handleSearch = ({ target }) => setSearch(target.value);

  const sortByHigher = (a, b) => {
    if (a.price > b.price) return 1;
    if (b.price > a.price) return -1;
    return 0;
  };

  const sortByLower = (a, b) => {
    if (a.price < b.price) return 1;
    if (b.price < a.price) return -1;
    return 0;
  };

  const filterSearch = (el) =>
    search === ""
      ? 1
      : el.name.startsWith(search.toLocaleUpperCase()) ||
        el.name.includes(search.toLocaleUpperCase());

  return (
    <div>
      <GlobalStyle />
      <FilterBar>
        <select onChange={handleChange} name="filterPrice" id="cars">
          <option value="sortBy">Ordenar por</option>
          <option value="higherPrice">Menor precio</option>
          <option value="lowerPrice">Mayor precio</option>
        </select>
        <input type="text" onChange={handleSearch} placeholder="Buscar" />
      </FilterBar>
      <ProductCont>
        {data === null ? (
          <Spinner />
        ) : sortPrice === null ? (
          data
            .filter(filterSearch)
            .map((el) => <Product key={el.id} props={el} />)
        ) : sortPrice === "higherPrice" ? (
          [...data]
            .filter(filterSearch)
            .sort(sortByHigher)
            .map((el) => <Product key={el.id} props={el} />)
        ) : (
          [...data]
            .filter(filterSearch)
            .sort(sortByLower)
            .map((el) => <Product key={el.id} props={el} />)
        )}
      </ProductCont>
    </div>
  );
}

export default App;
