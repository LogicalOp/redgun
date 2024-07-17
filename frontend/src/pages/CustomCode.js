import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader } from '@ui5/webcomponents-react';
import CustomCodeForum from '../components/Cards/CustomCodeForum';
import AddCustomCode from '../components/Forms/AddCustomCode';

const CustomCode = () => {
    return (
        <div>
         < CustomCodeForum/>
         <AddCustomCode/>
       
        </div>
       

   

    );
};

export default CustomCode;