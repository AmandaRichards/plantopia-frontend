import React from 'react'
import css from './SearchBar.module.css';
import {useState, useEffect} from 'react';
import Plant from '../Plant';

const SearchBar = ({handleClick, handleChange}) => {

  return (
    <div class={css.search}>
    <input placeholder="Search" class={css.searchBar} onChange={handleChange} />
    <button className={css.searchButton} onClick={handleClick}>Search</button>


</div>
  )
}

export default SearchBar;


//set up a get by name route in the database DO THIS 
//onclick set the search term to be the input field value
//make an api call when the search term changes