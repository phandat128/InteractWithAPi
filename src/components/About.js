import { Link } from "react-router-dom";

const About = () => {
  const apicall = {
    "event": "bts:subscribe",
    "data": {
      "channel": "[channel_name]"
    }
  }

  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <Link to='/'>Home</Link>
    </footer>
  )
}

export default About