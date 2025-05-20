import { useState, type ChangeEvent, type FormEvent } from 'react'
import textIcon from '../assets/icon-mail.png'
import { TextInput } from '../../ui-components/TextInput'
import { useHandleChange } from '../../hooks/useHandleChange'
import { isEmail, isLessThanLength, isMoreThanLength } from '../helpers/validators'

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

    const [passwordError, setPasswordError] = useState('')
    const options = [{
        name: 'Женский',
    }, {
        name: 'Мужской',
    }]

    const validators = {
        name: [isMoreThanLength(5), isLessThanLength(100)],
        nick_name: [isMoreThanLength(5), isLessThanLength(50)],
        email: [isEmail()],
        password: [isMoreThanLength(5), isLessThanLength(10)],
        repeat_password: [isMoreThanLength(5), isLessThanLength(10)],
    }

    const { values, errors, handleChange } = useHandleChange({
        name: '',
        nick_name: '',
        email: '',
        sex: options[0].name,
        password: '',
        repeat_password: '',
    }, validators)


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { password, repeat_password} = values
        if (password && repeat_password && password !==repeat_password) {
            setPasswordError('Пароли должны совпадать')
            return
        }
        onSubmit(values)
    }

    const onNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value.replace('@', '')
        handleChange(e, value)
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordError('')
        handleChange(e)
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
                error={errors?.name}
            />
            <TextInput
                name='nick_name'
                label='Ник'
                placeholder='Ник в tg'
                icon={textIcon}
                onChange={onNicknameChange}
                value={values.nick_name}
                error={errors?.nick_name}
            />
            <TextInput
                name='email'
                type='email'
                label='Email'
                inputSize='s'
                onChange={handleChange}
                value={values.email}
                error={errors?.email}
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
                onChange={onPasswordChange}
                value={values.password}
                error={errors?.password || passwordError}
            />
            <TextInput
                name='repeat_password'
                type='password'
                label='Повторите пароль'
                radius='l'
                onChange={onPasswordChange}
                value={values.repeat_password}
                error={errors?.repeat_password || passwordError}
            />
            <button type="submit">Зарегистрироваться</button>
        </form>
    )
}

export default Signup