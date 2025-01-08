import PropTypes from 'prop-types';

function Intro_02({ student }) {
  return (
    <div>
      <h1>Name of Student: {student.stuName}</h1>
      <h1>Age of Student: {student.stuAge}</h1>
      <h1>Roll No of Student: {student.stuRoll}</h1>
      <h1>University of Student: {student.stuUni}</h1>
    </div>
  );
}

// ✅ Add PropTypes validation
Intro_02.propTypes = {
  student: PropTypes.shape({
    stuName: PropTypes.string.isRequired,
    stuAge: PropTypes.number.isRequired,
    stuRoll: PropTypes.string.isRequired,
    stuUni: PropTypes.string.isRequired
  })
};

export default Intro_02;
