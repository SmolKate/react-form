import { useId, type DetailedHTMLProps, type InputHTMLAttributes } from "react"
import './styles.css'
interface RadioOptions {
    name: string
    value?: string | number
    isChecked?: boolean
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
                radioOptions?.map(({isChecked = false, name, value}) => {
                    const inputValue = value ?? name
                    return (
                        <div>
                            <input type="radio" id={name} name={name} value={inputValue} checked={isChecked} />
                            <label htmlFor={name}>{name}</label>
                        </div>
                )})
            ) : (
                <input id={inputId} type={type} {...restProps} />
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default TextInput