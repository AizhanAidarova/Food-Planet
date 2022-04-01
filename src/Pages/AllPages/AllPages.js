import React from 'react';
import PagesFeedbacks from '../Feedbacks/PagesFeedbacks';
import PagesFooter from '../Footer/PagesFooter';
import PagesHeader from '../Header/PagesHeader';
import PagesMain from '../Main/PagesMain';
import Total from '../NoveltiesMenu/Total';
import PagesAboutUs from '../AboutUs/PagesAboutUs';
import PagesMenu from '../Menu/PagesMenu'



const App = () => {
    return (
        <div>
            <PagesHeader/>
            <PagesMain/>
            <Total/>
            <PagesMenu/>
            <PagesAboutUs/>
            <PagesFeedbacks/>
            <PagesFooter/>
         </div>
    );
};

export default App;