import './style.css';


export function Button({children, onClick}){
    return(
        <>
        <button onClick={onClick} className="btn">{children}</button>
        </>
    )
}