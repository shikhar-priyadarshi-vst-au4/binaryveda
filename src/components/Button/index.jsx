export default function Button({
    className = "",
    children,
    onClick = () => {}
}){
    return <button className={`flex gap-x-2 justify-between items-center uppercase font-medium border border-gray-400 ${className}`} {...{onClick}}>
                {children}
            </button>
}

Button.StartAddon = function ({ children, className = ""}){
    return <span className={`w-8 h-8 ${className}`}>{children}</span>
}

Button.EndAddon = function ({ children, className = ""}){
    return <span className={`w-8 h-8 ${className}`}>{children}</span>
}