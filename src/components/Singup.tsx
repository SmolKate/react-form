import { TextInput } from "../ui-components/TextInput"

const Signup = () => {
    console.log('signup')
    const options = [{
        name: 'Женский',
        isChecked: true,
    }, {
        name: 'Мужской',
    }]
    return (
        <>
            <div>Signup</div>
            <TextInput
                name='name'
                label='Имя'
                disabled
            />
            <TextInput
                name='nick-name'
                label='Ник'
                placeholder='Ник в tg'
            />
            <TextInput
                name='email'
                type='email'
                label='Email'
                inputSize='s'
            />
            <TextInput
                name='sex'
                type='radio'
                label='Пол'
                radioOptions={options}
                inputSize='xl'
                description='some description'
            />
            <TextInput
                name='password'
                type='password'
                label='Пароль'
                radius='s'
                inputSize='s'
            />
            <TextInput
                name='repeat-password'
                type='password'
                label='Повторите пароль'
                radius='l'
            />
        </>
    )
}

export default Signup