import React from "react";
import {BuildingOffice2Icon, CurrencyDollarIcon, Squares2X2Icon, UsersIcon} from "@heroicons/react/24/outline";

export const menuData = [
    {
        icon: <Squares2X2Icon/>,
        title: 'Dashboard',
        link: '/',
        active: true
    },
    {
        icon: <BuildingOffice2Icon/>,
        title: 'Company',
        link: '/company',
        active: false
    },
    {
        icon: <UsersIcon/>,
        title: 'Employee',
        link: '/employee',
        active: false

    },
    {
        icon: <CurrencyDollarIcon/>,
        title: 'Payroll',
        link: '/payroll',
        active: false

    }
]
