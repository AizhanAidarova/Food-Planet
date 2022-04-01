import React from 'react';
import PagesHeader from "../Header/PagesHeader";
import PagesMain from "../Main/PagesMain";
import Novelties from "../Novelties/Novelties";
import PagesMenu from "../Menu/PagesMenu";
import PagesFooter from "../Footer/PagesFooter";
import PagesAboutUs from "../AboutUs/PagesAboutUs";
import PagesFeedbacks from "../Feedbacks/PagesFeedbacks";

const AllPages = () => {
    return (
        <div>
            <div>
                <PagesHeader/>
                <PagesMain/>
                <Novelties/>
                <PagesMenu/>
                <PagesAboutUs/>
                <PagesFeedbacks/>
                <PagesFooter/>
            </div>
        </div>
    );
};

export default AllPages;