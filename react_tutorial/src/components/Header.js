import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    const onClick = (e) => {
        console.log('click')
    }

    
  return (
    <header className='header'>
        <h1>Task Tracker - {title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}


Header.defaultProps = {
    title: 'This is a default Prop!'
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header