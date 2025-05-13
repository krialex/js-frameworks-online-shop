import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const schema = yup
    .object({
        fullName: yup
            .string()
            .min(3, 'Your name should be at least 3 characters.')
            .required('Please enter your full name'),
        subject: yup
            .string()
            .min(3, 'Your subject should include at least 3 characters')
            .required('Please enter your subject for the message'),
        email: yup
            .string()
            .email('Please enter a valid email address')
            .required('Please enter your email address'),
        body: yup
            .string()
            .min(3, 'Your message should be at least 3 characters long')
            .required('Please enter your message'),
    })
    .required();

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    function onSubmit(data) {
        console.log(data);
        toast.success("Your message has been sent");
    }

    return (
        <>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='fullName'>Full name</label>
            <input 
                id='fullName' 
                placeholder='full name' 
                {...register('fullName')} />
            <p>{errors.fullName?.message}</p>
            <label htmlFor='subject'>Subject</label>
            <input 
                id='subject' 
                placeholder='subject' 
                {...register('subject')} />
            <p>{errors.subject?.message}</p>
            <label htmlFor='email'>Email</label>
            <input 
                id='email' 
                placeholder='email' 
                {...register('email')} />
            <p>{errors.email?.message}</p>
            <label htmlFor='body'>Message</label>
            <input 
                id='body' 
                placeholder='message' 
                {...register('body')} />
            <p>{errors.body?.message}</p>
            <input type="submit" />
        </form>
        </>
    )
}