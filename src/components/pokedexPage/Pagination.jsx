import React from 'react'
import './styles/pagination.css'

const Pagination = ({page, setPage, total}) => {

    const handleLess = (num) => {
        if (page>num) {
            setPage(page - num);
        } else {
            setPage(total);
        }
        scroll(0, 0);
    }

    const handlePlus = (num) => {
        if (page <= total-num) {   
            setPage(page + num);
        } else {
            setPage(1);
        }
    }
  return (
    <div className='pagination'>
        <button onClick={()=>{handleLess(8)}}>{'<<'}</button>
        <button onClick={()=>{handleLess(1)}}>{'<'}</button>
        <span>{page}/{total} </span>
        <button onClick={()=>{handlePlus(1)}}>{'>'}</button>
        <button onClick={()=>{handlePlus(8)}}>{'>>'}</button>
    </div>
  )
}

export default Pagination;