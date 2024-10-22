import { Input } from './components/Input/Input';
import { useForm } from './hooks/useForm';
import { FormEvent, useState } from 'react';
import { ToogleTheme } from './components/ToogleTheme/ToogleTheme';
import './App.css';
import { validate } from './utils/validate';
import { validations } from './constants/validations';
import { ValidationError } from './interfaces/validation-error';
// import { Validation } from './interfaces/validation';
const initialState = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
}
export const App = () => {
  const { state, handleChange } = useForm(initialState);
  const { name, lastname, email, password, confirmPassword } = state;
  const [theme, setTheme] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: ValidationError[] = [];
    for (const key in validations) {
      const { field } = validations[key];
      const error = validate(validations[key], (state as any)[field].trim())
      if (error)
        errors.push(error);
    }
    if (password !== confirmPassword) {
      errors.push(
        {
          field: 'confirmPassword',
          message: `La contraseña debe coincidir con el contenido del campo de confirmación de contraseña`
        });
    }
    if (errors.length) 
      alert(errors.map(({ message }) => message).join('\n'));
    else
      alert('Informacion registrada correctamente.');
  }
  return (
    <div className={`page index-page ${theme ? 'dark' : 'light'}`}>
      <ToogleTheme theme={theme} setTheme={setTheme} />
      <h1>Bienvenido a la Liga de Superhéroes</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label='Nombre'
          name='name'
          value={name}
          handleChange={handleChange}
          minLength={4}
        />
        <Input
          label='Apellido'
          name='lastname'
          value={lastname}
          handleChange={handleChange}
          minLength={4}
        />
        <Input
          label='Correo Electronico'
          name='email'
          value={email}
          type='email'
          handleChange={handleChange}
          minLength={10}
        />
        <Input label='Contraseña' name='password' value={password} type='password' handleChange={handleChange} minLength={12} />
        <Input
          label='Confirmar Contraseña'
          name='confirmPassword'
          value={confirmPassword}
          type='password'
          handleChange={handleChange}
          minLength={12}
        />
        <input type="submit" value="Crear Superhéroe" className='btn btn-primary' />
      </form>
    </div>
  )
}