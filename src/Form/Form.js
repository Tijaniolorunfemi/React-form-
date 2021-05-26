import React from "react"
import "../App.css" 
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers'
import * as yup from "yup" 

    const schema = yup.object().shape({
        firstName: yup.string().required("First Name"),
        lastName: yup.string().required("Last Name"),
        email: yup.string().email().required("Email"), 
        age: yup.number().positive().integer().required("age"), 
        password: yup.string().min(6).max(15).required("input a password"),  
        confirmPassword:yup.string().oneOf([yup.ref("password"), null])
    })

    function Form() {
        const {register, handleSubmit, errors} = useForm({
            resolver: yupResolver(schema),
        })
        const submitForm = (data) => {
            console.log(data)
        }
        return (
            <div className="Form">
                <div className="title">sign up</div> 
                <div className="inputs">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <input type="text" name="firstName" placeholder="First Name..." ref={register}></input>
                        <p> {errors.firstName?.message} </p>
                        <input type="text" name="lastName" ref={register} placeholder="Last Name..."></input>
                        <p> {errors.lastName?.message} </p>
                        <input type="text" name="email" placeholder="Email..." ref={register}></input>
                        <p> {errors.Email?.message} </p>
                        <input type="text" name="age" placeholder="Age..." ref={register}></input>
                        <p> {errors.age?.message} </p>
                        <input type="password" name="password" placeholder="password..." ref={register}></input>
                        <p> {errors.password?.message} </p>
                        <input type="password" name="confirmPassword" placeholder="confirmpassword..." ref={register}></input>
                        <p>{errors.confirmPassword && "passwords should match!"} </p>
                        <input type="submit" id="submit" />
                    </form>
                </div>
            </div>
        )
    }

export default Form