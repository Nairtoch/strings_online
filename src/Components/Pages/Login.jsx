import { useForm } from "react-hook-form";
import { useAuth } from "../App/Auth/Auth";
import { Page } from "../App/Layout/Layout";
import axios from "axios";

// let counter = 0;

// export const Login = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = (d) => alert("You are now logged in!");
//     // const [loginData, setLoginData] = useAuth();

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
//             <h2>Login</h2>
//             <p>Indtast brugernavn og adgangskode for at logge på</p>
//             <label className="col-1"> 
//                 Brugernavn:
//                 <input type="text" id="username" placeholder="Brugernavn" {...register("username", { required: true })} />
//                 {errors.username && (
//                     <span>
//                         Indtast venligst dit brugernavn!
//                     </span>
//                 )}
//             </label>
//             <label className="col-1">
//                 Adgangskode:
//                 <input type="password" id="password" placeholder="Adgangskode" {...register("password", { required: true })} />
//                 {errors.password && (
//                     <span>
//                         Du skal udfylde din adgangskode!
//                     </span>
//                 )}
//             </label>

//             <div className="col-2">
//                 <button type="submit" value="Login" />
//             </div>
//         </form>
//     )
// }

// Learn Form Hooks properly

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

    return (
        <Page>
            {!loginData && !loginData.username ? (
                <form onSubmit={handleSubmit(sendLoginRequest)} className="LoginForm">
                    <h2>Login</h2>
//            <p>Indtast brugernavn og adgangskode for at logge på</p>
                    <div>
                        <label className="col-1">
                            Brugernavn:
                            <input
                                type="text"
                                id="username"
                                placeholder="Indtast brugernavn"
                                {...register("username", { required: true })}
                            />
                        </label>
                        {errors.username && (
                            <span>
                                Du skal udfylde dit brugernavn!
                            </span>
                        )}
                    </div>
                    <div>
                        <label className="col-1">
                            Adgangskode:
                            <input
                                type="password"
                                id="password"
                                placeholder="Indtast adgangskode"
                                {...register("password", { required: true })}
                            />
                        </label>
                        {errors.password && (
                            <span>
                                Du skal udfylde din adgangskode!
                            </span>
                        )}
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            ) :
                <div>
                    <p>Du er logget ind som <i>{loginData.username}</i></p>
                    <button onClick={logOut}>Log ud</button>
                </div>
            }
        </Page>
    );
};