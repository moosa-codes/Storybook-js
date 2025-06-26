const TextInput = ({ label, backgroundColor, placeholder, className }) => {
    return (
        <div style={{ backgroundColor: backgroundColor || "gray" }} className={`${className}`}>
            <label htmlFor={label} className="text-lg px-2.5">{label || "Strange"} :</label>
            <input
                type="text" id={label || Math.random() * 200}
                placeholder={placeholder || "what's upp"}
                className="w-[700px] px-6 py-4"
            />
        </div>
    )
}

export default TextInput