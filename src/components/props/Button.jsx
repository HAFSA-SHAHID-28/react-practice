import btnStyle from './Button.module.css'



const Button = ({text, icon, iconBg}) => {
  return (
    <>
        <button className={btnStyle.btn}>
            {text || "btn text"}
            <i className={` 
                ${iconBg? btnStyle.iconBg : btnStyle.bgNone}  
                ${btnStyle.icon} 
                ${icon || "fa-solid fa-arrow-right"}`}>
            </i>
        </button>
    </>
  )
}

export default Button