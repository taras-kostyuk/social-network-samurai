 import React from "react";
import style from './FormsControls.module.css'
export  const FormControl = ({input, meta,...props}:any) => {
    const hasError =meta.touched && meta.error
    return(

        <div className={ style.formControl + " " +(hasError ? style.error : '')}>
            <div> {props.children} </div>
            {hasError && <span>{ meta.error}</span>}

            </div>
    )
}

 export const Textarea = (props:any) => {
     const{input, meta, child,...restProps}:any = props
     return <FormControl {...props}  > <textarea {...input}{...restProps} /> </FormControl>

 }
 export const Input = (props:any) => {
     const{input, meta, child,...restProps}:any = props
     return <FormControl {...props}  > <input {...input}{...restProps} /> </FormControl>

 }