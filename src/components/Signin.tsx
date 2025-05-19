import { TextInput } from "../ui-components/TextInput"
import textIcon from '../assets/icon-mail.png'
import { type FormEvent } from "react"
import { useHandleChange } from "../hooks/useHandleChange"

export interface SiginValues {
    email: string,
    password: string,
}

interface Signin {
    onSubmit: (value: SiginValues) => void
}

const Signin = ({ onSubmit }: Signin) => {
    const [values, handleChange] = useHandleChange({
        email: '',
        password: '',
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(values)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>Signin</div>
            <TextInput
                name='email'
                type='email'
                label='Email'
                inputSize='s'
                variant='brand'
                withAsterisk
                icon={textIcon}
                onChange={handleChange}
                value={values.email}
            />
            <TextInput
                name='password'
                type='password'
                label='Пароль'
                error='ошибка'
                onChange={handleChange}
                value={values.password}
            />
            <button type="submit">Войти</button>
        </form>
    )
}

export default Signin