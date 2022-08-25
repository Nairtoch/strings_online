import { useState } from "react";
import { useForm } from "react-hook-form";

let counter = 0;

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (d) => alert("You are now logged in!");
    // const [loginData, setLoginData] = useState("");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
            <h2>Login</h2>
            <p>Indtast brugernavn og adgangskode for at logge på</p>
            <label className="col-1"> 
                Brugernavn:
                <input type="text" id="username" placeholder="Brugernavn" {...register("username", { required: true })} />
                {errors.username && (
                    <span>
                        Indtast venligst dit brugernavn!
                    </span>
                )}
            </label>
            <label className="col-1">
                Adgangskode:
                <input type="password" id="password" placeholder="Adgangskode" {...register("password", { required: true })} />
                {errors.password && (
                    <span>
                        Du skal udfylde din adgangskode!
                    </span>
                )}
            </label>

            <div className="col-2">
                <button type="submit" value="Login" />
            </div>
        </form>
    )
}

// Learn Form Hooks properly