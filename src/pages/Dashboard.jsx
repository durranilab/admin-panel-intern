import React from 'react';
import AnnouncementBar from "../comps/AnnouncementBar";
import DashboardCards from "../comps/DashboardCards";
import {BookOpenIcon, BriefcaseIcon, HeartIcon} from "@heroicons/react/24/outline";

const Dashboard = () => {
    return (
        <div>
            <AnnouncementBar/>


            <div className={'flex gap-2 mt-4'}>
                <DashboardCards
                icon={<BookOpenIcon className={'w-4'}/>}
                title={"Total Employees"}
                value={"100"}
                />
                <DashboardCards
                    icon={<BriefcaseIcon className={'w-4'} />}
                    title={"Total Projects"}
                    value={"100"}
                />
                <DashboardCards
                    icon={<HeartIcon className={'w-4'} />}
                    title={"Total Projects"}
                    value={"100"}
                />
            </div>

        </div>
    );
};

export default Dashboard;
