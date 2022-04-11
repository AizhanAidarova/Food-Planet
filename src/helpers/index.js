export const getCurrentDate = () => {
    ///yyyy-mm-dd-hh
    function twoDigits(num) {
        if (num < 10) {
        return ('0' + num).slice(-2);
        } else {
        return num
        }
        }
        
    const date = new Date();
    const currentDate = twoDigits(date.getDate()) + '.' + twoDigits((date.getMonth()+1)) + '.' + twoDigits(date.getFullYear()) ;
    console.log(currentDate);
}

