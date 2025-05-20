import { type FormEvent } from 'react'
import { TextInput } from '../../ui-components/TextInput'
import { useHandleChange } from '../../hooks/useHandleChange'
import { isEmail, isLessThanLength, isMoreThanLength } from '../helpers/validators'

export interface SiginValues {
    email: string,
    password: string,
}

interface Signin {
    onSubmit: (value: SiginValues) => void
}

const Signin = ({ onSubmit }: Signin) => {
    const validators = {
        email: [isEmail()],
        password: [isMoreThanLength(5), isLessThanLength(10)]
    }

    const {values, errors, handleChange} = useHandleChange({
        email: '',
        password: '',
    }, validators)

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
                onChange={handleChange}
                value={values.email}
                error={errors?.email}
            />
            <TextInput
                name='password'
                type='password'
                label='Пароль'
                onChange={handleChange}
                value={values.password}
                error={errors?.password}
            />
            <button type="submit">Войти</button>
        </form>
    )
}

export default Signin