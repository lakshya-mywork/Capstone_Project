import React, {useState} from "react";
import './SearchBar.css';
import data from "../Assets/all_product";
import { Link } from 'react-router-dom';
import Item from "../Item/Item";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
         <Link to="/searchbar"><input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} /></Link>
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm === ""){
                  return "";
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((item,i) => {
                return(
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default SearchBar;
