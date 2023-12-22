"use client"

const Boton = ({children, className = '', ...args}) => {

    return (
        <button
            className=
            {`min-w-max border-solid border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray bg-win-gray-light px-2 active:border-r-white active:border-b-white active:border-t-win-btn-border-gray active:border-l-win-btn-border-gray  active:translate-y-py active:translate-x-px ${className}`}
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton