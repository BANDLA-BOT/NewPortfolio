import { useState } from "react";
import "./Login.css";
const Login = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="login">
       <div>
        
       </div>
    </div>
  );
};

export default Login;
