import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import { Input, InputType } from './components/Input'

type FormDataType = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const initialForm: FormDataType = {
  name: '',
  lastname: '',
  confirmPassword: '',
  password: '',
  email: ''
}
export const App = () => {

  const [hero, setHero] = useState<FormDataType>(initialForm);
  const { name, password, lastname, confirmPassword, email } = hero;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHero({ ...hero, [name]: value });
  }
  const fields: InputType[] = [
    { label: 'Nombre', type: 'text', value: name, handleChange, name: 'name' },
    { label: 'Apellido', type: 'text', value: lastname, handleChange: handleChange, name: 'lastname', },
    { label: 'Correo Electronico', type: 'email', value: email, handleChange: handleChange, name: 'email', },
    { label: 'Contraseña', type: 'password', value: password, handleChange: handleChange, name: 'password', },
    { label: 'Confirmar Contraseña', type: 'password', value: confirmPassword, handleChange: handleChange, name: 'confirmPassword' }
  ];
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateNames = /^[A-Za-z\s]{4,}$/i;
    const validateEmail = /^\w{10,}\@\w{3,}$/i;
    const validatePassword = /^\w{12,}$/i;
    const validations: any = {};

    validations.name = validateNames.test(name.trim()) || "El Nombre debe tener 4 o mas caracteres";
    validations.lastname = validateNames.test(lastname.trim()) || "El Apellido debe tener 4 o mas caracteres";
    validations.email = validateEmail.test(email) || "Recuerda que en esos 10 caracteres se debe incluir el @ con una terminación digna de un superhéroe";
    validations.password = validatePassword.test(password) || "La contraseña debe tener al menos 12 caracteres ultra secretos.";
    validations.matchPasswords = password === confirmPassword || "La contraseña debe coincidir con el contenido del campo de confirmación de contraseña";
    executeErrors(validations);
  }

  const executeErrors = (validations: any) => {
    let message = "";
    for (const key in validations) {
      message += (validations[key] === true) ? "" : validations[key] + "\n";
    }
    if (message !== "")
      alert(message);

  }

  return (
    <>
      <h1 className='title'>Bienvenido a la liga de Superheroes</h1>
      <Form title='Registro de Superhéroes' handleSubmit={handleSubmit}>
        {
          fields.map((field) => <Input {...field}/>)
        }
        {/* <Input label='Nombre' type='text' value={name} handleChange={handleChange} name='name' />
        <Input label='Apellido' type='text' value={lastname} handleChange={handleChange} name='lastname' />
        <Input label='Correo Electronico' type='email' value={email} handleChange={handleChange} name='email' />
        <Input label='Contraseña' type='password' value={password} handleChange={handleChange} name='password' />
        <Input label='Confirmar Contraseña' type='password' value={confirmPassword} handleChange={handleChange} name='confirmPassword' /> */}
        <input type="submit" value="Crear Superheroe" className='btn-create' />
      </Form>
    </>

  )
}
