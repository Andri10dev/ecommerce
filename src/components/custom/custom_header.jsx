const CustomHeader = ({children}) => {
    return (
        <div className="w-full h-16 grid grid-cols-3  items-center justify-between bg-orange-500 text-white px-3">
            {children}
        </div>
    )
}

export default CustomHeader