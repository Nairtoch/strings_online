import { useAuth } from "../App/Auth/Auth";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const { loginData, setLoginData } = useAuth();

      const sendLoginRequest = async (data, e) => {
        e.target.reset();
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        const url = "https://api.mediehuset.net/token";
        const result = await axios.post(url, formData);
        handleSessionData(result);
      };

      const handleSessionData = (res) => {
        if (!res.message) {
          setLoginData(res.data);
          sessionStorage.setItem("token", JSON.stringify(res.data));
        }
      } 
    
      const logOut = () => {
          sessionStorage.removeItem('token')
          setLoginData('')
      }

      return(
        <></>
      )
}