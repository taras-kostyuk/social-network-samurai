import React from "react";
import  {InjectedFormProps, reduxForm,Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStoreType} from "../../Redux/redux-store";
import s from "./../common/FormsControls/FormsControls.module.css"



export type loginApiType = {
    login: (email: string, password: string, formData: boolean) => void ,
    isAuth:boolean
}


type FormDataType = {
    email:string
    password:string
    rememberMe:boolean
}
const maxLength30 = maxLengthCreator(30)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props:any)=> {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength30]} placeholder="Email" name = {"email"} component ={Input}/>
            </div>
            <div>
                <Field validate={[required,maxLength30]} placeholder="Password" name = {"password"} type="password" component ={Input}/>
            </div>
            <div>
                <Field validate={[required,maxLength30]} component ={Input} name = {"rememberMe"} type="checkbox"/> Remember Me
            </div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

}

const  LoginReduxForm = reduxForm<FormDataType>({form: 'login'}) (LoginForm)

const Login = (props:loginApiType)=> {
    const onSubmit = (formData:FormDataType) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if (props.isAuth) {
        return< Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state:RootStoreType) => ({
    isAuth:state.auth.isAuth
})
export default connect (mapStateToProps,{login})(Login)