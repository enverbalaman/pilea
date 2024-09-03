import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import { ProgressBar } from 'primereact/progressbar';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Carousel } from 'primereact/carousel';
import { Timeline } from 'primereact/timeline';
import CustomerService from '../service/CustomerService';



const Dashboard = () => {


    return (
        <>
        <div className="layout-dashboard flex justify-content-center">
            <h1>Hilal Tuğçe BALAMAN a ait bir sitedir.</h1>


        </div>
            <p>Çiçekler ile ilgili makaleler yer alacaktır. Beklemede kalın</p>

        </>
    );
};

export default Dashboard;
