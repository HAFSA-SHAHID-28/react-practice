import React, { useState } from 'react'

const Form = () => {

    // step - navigation state h
    const [step, setStep] = useState(1);

    // form ka actual data es state men rahega
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        contact: "",
        email: "",
        password: "",
        address: "",
        qualification: "",

    });
    

  return (
    <>
    <h1>Multi step Form</h1>

    {
        step === 1 && (
            <Step1
        )
    }



    </>
)
}

export default Form