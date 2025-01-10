import PropTypes from 'prop-types';

function IsLoggedIn(props) {
  return (
      <div>
          {/* adding some inline css and js */}
      {props.isLoggedIn ? (
        <h1 style={{ color: 'gray', fontSize: '24px', backgroundColor:'greenyellow', display:'inline'}}>
          Welcome to React Team, {props.name}
        </h1>
      ) : (
        <h1 style={{ color: 'red', fontSize: '20px' }}>
          Please First Log in...
        </h1>
      )}
    </div>
  );
}

IsLoggedIn.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default IsLoggedIn;
