import PropTypes from 'prop-types'

function Intro({name,age}) {
  return (
      <h1>Hello React Devs, I am { name} and my age is { age}</h1>
  )
}
// here we are using prop types for type checking although it will work without this but recommended to use prop types. 

Intro.propTypes = {
    
        name: PropTypes.string.isRequired,
        age:PropTypes.number.isRequired
    
}
export default Intro