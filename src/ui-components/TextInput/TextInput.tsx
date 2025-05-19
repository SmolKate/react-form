import { useId, type DetailedHTMLProps, type InputHTMLAttributes } from "react"
import './styles.css'
interface RadioOptions {
    name: string
    value?: string | number
}

type InputVariant = 'defualt' | 'brand'
type InputRadius = 's' | 'm' | 'l'
type InputSize = 's' | 'm' | 'l' | 'xl'

interface TextInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label?: string
    description?: string
    error?: string
    variant?: InputVariant
    radius?: InputRadius
    inputSize?: InputSize
    icon?: string
    withAsterisk?: boolean
    radioOptions?: RadioOptions[]
    checkedItem?: string
}

const TextInput = (props: TextInput) => {
    const inputId = useId()

    const {
        label,
        description,
        error,
        variant = 'defualt',
        radius = 'm',
        inputSize = 'm',
        type,
        radioOptions,
        withAsterisk,
        icon,
        value: inputValue,
        ...restProps
    } = props

    return (
        <div className={`text-input variant-${variant} input-radius-${radius} input-size-${inputSize}`}>
            <div>
                {type === 'radio' && label ? <p>{label}</p> : <label htmlFor={inputId}>{label}</label>}
                {withAsterisk && <p className="asterisk">*</p>}
            </div>
            {description && <p className="description">{description}</p>}
            {type === 'radio' ? (
                radioOptions?.map(({ name, value }) => {
                    const radioInputValue = value ?? name
                    return (
                        <div key={radioInputValue}>
                            <input type="radio" id={name} name={name} value={radioInputValue} checked={name === inputValue} {...restProps}/>
                            <label htmlFor={name}>{name}</label>
                        </div>
                )})
            ) : (
            <div className="input-wrapper">
                {icon && <img src={icon} />}
                <input id={inputId} type={type} value={inputValue} {...restProps} />
            </div>
                
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default TextInput