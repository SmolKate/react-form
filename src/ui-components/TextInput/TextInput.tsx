import { useId, type DetailedHTMLProps, type InputHTMLAttributes } from "react"
import './styles.css'
interface RadioOptions {
    name: string
    value?: string | number
    isChecked?: boolean
}

interface TextInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label?: string
    radioOptions?: RadioOptions[]
    checkedItem?: string
}

const TextInput = (props: TextInput) => {
    console.log('text-input')
    const inputId = useId()

    const { label, type, radioOptions, ...restProps } = props
    console.log('text-input', inputId)

    return (
        <>
        {type === 'radio' ? (
            <div>
                {label && <p>{label}</p>}
                {radioOptions?.map(({isChecked = false, name, value}) => {
                    const inputValue = value ?? name
                    return (
                        <div>
                            <input type="radio" id={name} name={name} value={inputValue} checked={isChecked} />
                            <label htmlFor={name}>{name}</label>
                        </div>
                )})}
          </div>
        ) : (
            <div className="text-input">
                {label && <label htmlFor={inputId}>{label}</label>}
                <input id={inputId} type={type} {...restProps} />
            </div>
        )}
        </>
    )
}

export default TextInput