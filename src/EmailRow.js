import React from 'react'
import './EmailRow.css';
import {useHistory} from 'react-router-dom'; 

import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { IconButton,Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({title,subject,description,time,id}) {
   const dispatch=useDispatch();
   const openMail=()=>{
       dispatch(selectMail({
        title,
        subject,
        description,
        time,
        id,
       }))

       history.push('/mail');
   }


   const history=useHistory();
    return (
        <div className='emailRow' onClick={openMail}>
            <div className='emailRow__options'>
            <Checkbox/>
               
               <IconButton>
                    <StarBorderOutlinedIcon/>
               </IconButton>

               <IconButton>
                    <LabelImportantOutlinedIcon/>
               </IconButton> 
            </div>

            <h3 className='emailRow__title'>
              {title}
            </h3>

            <div className='emailRow__message'>
                <h4>{subject}{" "}
                <span className='emailRow__description'>-  
                 {description}
                </span>
                </h4>
            </div>
            
            <p className='emailRow__time'>
                {time}
            </p>
               
        </div>
    )
}

export default EmailRow
