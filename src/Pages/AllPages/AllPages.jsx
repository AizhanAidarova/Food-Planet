import React from 'react';
import PagesHeader from "../Header/PagesHeader";
import PagesMain from "../Main/PagesMain";
import Novelties from "../NoveltiesMenu/NoveltiesMenu";
import PagesMenu from "../Menu/PagesMenu";
import PagesAboutUs from '../AboutUs/PagesAboutUs';
import PagesFeedbacks from '../Feedbacks/PagesFeedbacks';
import PagesFooter from '../Footer/PagesFooter';

const AllPages = (/*{addToBasket,removeInBasket}*/) => {
    return (
        <>
            <div>
                <PagesHeader/>
                <PagesMain/>
                <Novelties/>
                <PagesMenu{/* addToBasket={addToBasket} removeInBasket ={removeInBasket}*/}/>
                <PagesAboutUs/>
                <PagesFeedbacks/>
                <PagesFooter/>
            </div>
        </>
    );
};

export default AllPages;