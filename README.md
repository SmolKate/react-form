This project was performed using React + TypeScript + Vite.

# Run project

It is neseccary to perform the following command `npm run dev` in order to start the project in the development mode.

# Project target

This project was carried out for educational purposes. It was necessary to implement two forms: sign in and sing up. As part of this project the custom TextInput was also created. It can show input label, description, errors and icon and also change style and sizes.

Example:
```
  <TextInput
    name='nick_name'
    label='Ник'
    placeholder='Ник в tg'
    icon={textIcon}
    onChange={onNicknameChange}
    value={values.nick_name}
    error={errors?.nick_name}
  />
```
