import React from 'react';
import PagesHeader from '../Header/PagesHeader';
import PagesMain from '../Main/PagesMain';
import Total from '../NoveltiesMenu/Total';



const App = () => {
    return (
        <div>
            <PagesHeader/>
            <PagesMain/>
            <Total/>
         </div>
    );
};

export default App;