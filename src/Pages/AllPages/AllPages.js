import React from 'react';
import PagesHeader from '../Header/PagesHeader';
import PagesMain from '../Main/PagesMain';
import Total from '../NoveltiesMenu/Total';
import PagesFeedbacks from '../Feedbacks/PagesFeedbacks';
import PagesFooter from '../Footer/PagesFooter';
import PagesAboutUs from '../AboutUs/PagesAboutUs';



const App = () => {
    return (
        <div>
            <PagesHeader/>
            <PagesMain/>
            <Total/>
            <PagesAboutUs/>
            <PagesFeedbacks/>
            <PagesFooter/>
         </div>
    );
};

export default App;