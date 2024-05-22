const Card = (props) => {
    const {children, text}= props;
    return (
        <div {...props} className="max-w-sm relative w-64 p-1.5 mb-10 rounded overflow-hidden shadow-lg bg-slate-200 transition-all hover:scale-90">
            {text || children}
        </div>
    )
}