import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  
  return (
    <header className='header'>
      {/* Inline css styling for React */}
      {/* <h1 style={{color: 'red', backgroundColor: 'green'}}>{title}</h1> */}
      <h1>{ title }</h1>
     <Button  color={showAdd ? 'red' : 'green'} 
     text={showAdd ? 'Close' : 'Add'} 
     onClick={onAdd} /> 
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker!',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// Another way to add css styling in React is inline, just add single curly braces instead & the headingStyle where you have the properties in the inline css for the h1
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'green'
// }

export default Header
