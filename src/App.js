import React from 'react';
import PagesHeader from './Pages/Header/PagesHeader';
import PagesMain from './Pages/Main/PagesMain';
// import BurgersMenu from './Pages/NoveltiesMenu/BurgersMenu';
// import NoveltiesMenu from './Pages/NoveltiesMenu/NoveltiesMenu';
import Total from './Pages/NoveltiesMenu/Total';



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