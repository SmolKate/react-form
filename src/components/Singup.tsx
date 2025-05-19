import type { FormEvent } from "react"
import { TextInput } from "../ui-components/TextInput"
import { useHandleChange } from "../hooks/useHandleChange"

export interface SignupValues {
    name: string
    nick_name: string
    email: string
    sex: string
    password: string
    repeat_password: string
}

interface Signup {
    onSubmit: (value: SignupValues) => void
}

const Signup = ({ onSubmit }: Signup) => {
    const options = [{
        name: 'Женский',
    }, {
        name: 'Мужской',
    }]

    const [values, handleChange] = useHandleChange({
        name: '',
        nick_name: '',
        email: '',
        sex: options[0].name,
        password: '',
        repeat_password: '',
    })


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(values)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>Signup</div>
            <TextInput
                name='name'
                label='Имя'
                disabled
                onChange={handleChange}
                value={values.name}
            />
            <TextInput
                name='nick_name'
                label='Ник'
                placeholder='Ник в tg'
                onChange={handleChange}
                value={values.nick_name}
            />
            <TextInput
                name='email'
                type='email'
                label='Email'
                inputSize='s'
                onChange={handleChange}
                value={values.email}
            />
            <TextInput
                name='sex'
                type='radio'
                label='Пол'
                radioOptions={options}
                inputSize='xl'
                description='some description'
                onChange={handleChange}
                value={values.sex}
            />
            <TextInput
                name='password'
                type='password'
                label='Пароль'
                radius='s'
                inputSize='s'
                onChange={handleChange}
                value={values.password}
            />
            <TextInput
                name='repeat_password'
                type='password'
                label='Повторите пароль'
                radius='l'
                onChange={handleChange}
                value={values.repeat_password}
            />
            <button type="submit">Зарегистрироваться</button>
        </form>
    )
}

export default Signup