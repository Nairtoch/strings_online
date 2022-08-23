import { useState } from "react";
import { useForm } from "react-hook-form";

let counter = 0;

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (d) => alert("You are now logged in!");
    const [data, setData] = useState("");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
            <h2>Login</h2>
            <input type="text" placeholder="First Name" {...register("First name", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Last Name" {...register("Last name", { required: true, maxLength: 100 })} />
            <input type="text" placeholder="E-Mail" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

            <div className="col-2">
                <input type="submit" value="Login" />
                {/* <input type="reset" value="Reset" /> */}
            </div>
        </form>
    )
}