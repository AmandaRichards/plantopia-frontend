import React from 'react'
import css from './DeleteButton.module.css'

function DeleteButton({text, handleClick}) {
  return (
    <div className={css.button}>
    <button className={css.button} onClick={handleClick}>
        <img src="https://www.svgrepo.com/show/532997/plus-large.svg" className={css.plus}></img>
        <p>{text}</p>
    </button>
   </div>
  )
}

export default DeleteButton
