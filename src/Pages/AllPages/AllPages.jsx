import React from 'react';
import PagesHeader from "../Header/PagesHeader";
import PagesMain from "../Main/PagesMain";
import Novelties from "../Novelties/Novelties";
import PagesMenu from "../Menu/PagesMenu";

const AllPages = () => {
    return (
        <div>
            <div>
                <PagesHeader/>
                <PagesMain/>
                <Novelties/>
                <PagesMenu/>
            </div>
        </div>
    );
};

export default AllPages;