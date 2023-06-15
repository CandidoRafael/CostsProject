import styles from "./Input.module.css"

function Input({ type, text, name, placeholder, handleOnChange, value, min }) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                min={min}
                required
            />
        </div>
    )
}

export default Input