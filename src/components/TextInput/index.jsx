export default function TextInput(props){
    const {children, className="", ...rest} = props;
    return <>
        <div className="relative flex flex-col">
            <input {...rest} className={`border border-gray-700 text-xl px-1 py-3 rounded-none outline-none ${className}`}/>
            {children}
        </div>
    </>
}

TextInput.StartIcon = function({children, className=""}){
    return <div className={`absolute top-1/2 left-2 -translate-y-1/2 ${className}`}>{children}</div>
}

TextInput.EndIcon = function({children, className=""}){
    return <div className={`absolute top-1/2 right-2 -translate-y-1/2 ${className}`}>{children}</div>
}