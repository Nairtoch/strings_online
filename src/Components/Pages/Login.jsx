import { useState } from "react";
import { useForm } from "react-hook-form";

let counter = 0;

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (d) => alert("You are now logged in!");
    const [data, setData] = useState("");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
            <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

            <div className="col-2">
                <input type="submit" value="Login" />
                <input type="reset" value="Reset" />
            </div>
        </form>
    )
}