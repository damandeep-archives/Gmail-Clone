import React from 'react'
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {
    const {register,handleSubmit,watch, formState:{errors}}=useForm();
  
    const onSubmit=(data)=>{
        console.log(data);
        db.collection('emails').add({
            to:data.to,
            subject:data.subject,
            message:data.message,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage());
    }
    const dispatch=useDispatch();
    return (
        <div className='sendMail'> 
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon className='sendMail__close' onClick={()=>dispatch(closeSendMessage())} />
            </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='To' type="email" name='to' {...register('to',{required:'true'})} />

            {errors.to &&  <p className='sendMail__error'>To is required</p>}

            <input placeholder='Subject' type="text" name='subject'{...register('subject',{required:true})}/>

            {errors.subject &&  <p className='sendMail__error'>Subject is required</p>}

            <input placeholder='Message...' type='text' className='sendMail__message' name='message' {...register('message',{required:true})}/>

            {errors.message &&  <p className='sendMail__error'>Message cannot be empty</p>}

        <div className='sendMail__options'>
            <Button className='sendMail__send' variant="contained" color="primary" type="submit"> Send</Button>
        </div>
        </form>
        </div>
    )
}

export default SendMail
