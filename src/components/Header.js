import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  
  return (
    <header className='header'>
      {/* Inline css styling for React */}
      {/* <h1 style={{color: 'red', backgroundColor: 'green'}}>{title}</h1> */}
      <h1>{ title }</h1>
     {location.pathname === '/' && (<Button  color={showAdd ? 'red' : 'green'} 
     text={showAdd ? 'Close' : 'Add'} 
     onClick={onAdd} 
     />
     )}
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
