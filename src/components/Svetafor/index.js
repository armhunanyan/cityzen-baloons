import './index.scss';

function Svetafor({color}){

    let c = 'svetafor-container ' + color;

    return(
        <div className={c}>
            <div className="svetafor">
                <div className="circle"></div>
            </div>
            
            <div className="light"></div>

        </div>
    )

}

export default Svetafor