import React from "react";
import  {InjectedFormProps, reduxForm,Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}
const maxLength30 = maxLengthCreator(30)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props:any)=> {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength30]} placeholder="Login" name = {"login"} component ={Input}/>
            </div>
            <div>
                <Field validate={[required,maxLength30]} placeholder="Password" name = {"password"} component ={Input}/>
            </div>
            <div>
                <Field validate={[required,maxLength30]} component ={Input} name = {"rememberMe"} type="checkbox"/> Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

}

const  LoginReduxForm = reduxForm<FormDataType>({form: 'login'}) (LoginForm)

export const Login = ()=> {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
}