import { useParams } from "react-router-dom"

const ContactUs = () => {
  const { id } = useParams();
  return (
    <div>ContactUs .....
      <h1>Welcome User With Id:{id}</h1>
    </div>
  )
}

export default ContactUs