import './index.scss';

function Panel({color}){

    const colorToArm = (color) =>{

        const translations = {red:"կարմիր",yellow:"դեղին",green:'կանաչ'};

        return translations[color];
    }

    var c_c = 'color-panel ' + color;

    return(
        <div className={c_c}>

            {colorToArm(color)}
            
        </div>
    )

}

export default Panel;