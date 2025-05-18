import { TextInput } from "../ui-components/TextInput"
import textIcon from '../assets/icon-mail.png'

const Signin = () => {
    console.log('signin')

    return (
        <>
        <div>Signin</div>
            <TextInput
                name='email'
                type='email'
                label='Email'
                inputSize='s'
                variant='brand'
                withAsterisk
                icon={textIcon}
            />
            <TextInput
                name='password'
                type='password'
                label='Пароль'
                error='ошибка'
            />
        </>
    )
}

export default Signin