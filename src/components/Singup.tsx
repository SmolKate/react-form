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
            <TextInput name='name' label='Имя'/>
            <TextInput name='nick-name' label='Ник' placeholder='Ник в tg'/>
            <TextInput
                name='email'
                type='email'
                label='Email'
            />
            <TextInput
                name='sex'
                type='radio'
                label='Пол'
                radioOptions={options}
            />
            <TextInput
                name='password'
                type='password'
                label='Пароль'
            />
            <TextInput
                name='repeat-password'
                type='password'
                label='Повторите пароль'
            />
        </>
    )
}

export default Signup