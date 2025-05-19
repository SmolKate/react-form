import { useState, type ChangeEvent } from "react"

const useHandleChange = <T>(initialValues: T) => {
    const [values, setValues] = useState(initialValues)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setValues(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    return [values, handleChange] as [T, (value: ChangeEvent<HTMLInputElement>) => void]
}

export {
    useHandleChange
}