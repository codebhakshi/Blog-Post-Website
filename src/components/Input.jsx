import React from 'react'
import { useId } from 'react'

const Input=React.forwardRef(function Input(
    {
        label,
        type,
        className="",
        ...props
    },ref
) {
    const ID=useId();
  return (
         <div>
            {label && <label
            className='inline-block mb-1 pl-1'
            htmlFor={ID}
            >{label}</label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full $(className)`}
            {...props}
            ref={ref}
            id={ID}
            ></input>
         </div>
  )
}
)

export default Input