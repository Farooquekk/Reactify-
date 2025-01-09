import PropTypes from 'prop-types';

function Card({ img, title, desc }) {
    return (
      
    <div className='container'>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
        
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

Card.defaultProps = {
  img: 'https://via.placeholder.com/150',  // Default image URL
  title: 'John',
  desc: 'ZZZZZZZZ',
};

export default Card;
