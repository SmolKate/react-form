import { TextInput } from "../ui-components/TextInput"

const Signin = () => {
    console.log('signin')

    return (
        <>
        <div>Signin</div>
            <TextInput
                name='email'
                type='email'
                label='Email'
            />
            <TextInput
                name='password'
                type='password'
                label='Пароль'
            />
        </>
    )
}

export default Signin