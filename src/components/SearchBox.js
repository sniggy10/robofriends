import React from 'react'

const searchBox = ({searchField, searchChange}) =>{
    return(
        <div className='pa2'>
            <input className='pa3 bg-lightest-blue ba b--green'
            type='search'
            placeholder='search box'
            onChange={searchChange}>
            </input>
        </div>
    )
}

export default searchBox;