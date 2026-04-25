import btnStyle from './Btn.module.css'

const Button = ({ text, icon, iconBg }) => {
    return (
        <>
            <button className={`
                ${btnStyle.btn}
                ${text === "Delete" ? btnStyle.danger : ""} 
                `}>
                {text || "btn text"}
                {icon &&
                    (<i className={`
                        ${iconBg ? btnStyle.iconBg : btnStyle.bgNone}  
                        ${btnStyle.icon} 
                        ${icon}`}>
                    </i>)}
            </button>
        </>
    )
}

export default Button