'use client';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { ThemeProvider } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';
import userValidation from '@/validations/userValidations';
import IUser from '@/interfaces/IUser';
import inputTheme from '@/themes/input';

export default function ContactForm() {
  const [userContact, setUserContact] = useState<IUser>({
    'name': '',
    'company': '',
    'email': '',
    'cellPhone': '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const error = userValidation(userContact);
    if (error) {
      setErrorMessage(error);
      return;
    }

    console.log('User-->', userContact)
    setErrorMessage("");
    setUserContact({
      'name': '',
      'company': '',
      'email': '',
      'cellPhone': '',
    });
    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
    }, 10000);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserContact((prevState) => ({ ...prevState, [name]: value }));
  };

  function handlePhone(event: React.ChangeEvent<HTMLInputElement>) {
    const inputPhone = event.target.value;
    const formattedPhone = inputPhone.slice(0, 11);
    setUserContact((prevState) => ({ ...prevState, cellPhone: formattedPhone }));
  }

  return (
    <div className="flex flex-col justify-center py-0 sm:px-6 lg:px-8 pb-10 md:pb-24">
      <div className="w-full mx-auto px-2">
        <div className="py-8 px-4 shadow rounded-lg sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-3xl text-gray-900 my-10 font-glacial-bold">Preencha todos os campos</h2>
          </div>

          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="mt-6 mb-6">
                <p
                  data-testid="common_login__element-invalid-email"
                  className="text-md text-red-600 text-center"
                >
                  🚫 {errorMessage}
                </p>
              </div>
            )}

            {successMessage && (
              <div className="mt-6 mb-6">
                <p
                  data-testid="common_login__element-invalid-email"
                  className="font-semibold text-md text-purple-700 text-center"
                >
                  Obrigado pelo contato, em breve entraremos em contato! ✅
                </p>
              </div>
            )}

            <div>
              <TextField
                type='text'
                id="name"
                name="name"
                label="Insira o seu nome completo"
                placeholder="Nome Completo"
                value={userContact.name}
                margin="normal"
                fullWidth
                required
                variant="outlined"
                onChange={handleChange}
                InputLabelProps={{
                  sx: {
                    '&.Mui-focused': {
                      color: inputTheme.palette.text.secondary,
                    },
                    '&.MuiInputLabel-required': {
                      color: inputTheme.palette.primary.light,
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: inputTheme.palette.primary.main,
                  },
                }}
              />
            </div>

            <div className="mt-2 mb-2">
              <TextField
                type="text"
                id="company"
                name="company"
                label="Insira o nome da empresa"
                placeholder="Empresa"
                value={userContact.company}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                InputLabelProps={{
                  sx: {
                    '&.Mui-focused': {
                      color: inputTheme.palette.text.secondary,
                    },
                    '&.MuiInputLabel-required': {
                      color: inputTheme.palette.primary.light,
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: inputTheme.palette.primary.main,
                  },
                }}
              />
            </div>

            <div className="mt-2 mb-2">
              <TextField
                type="email"
                id="email"
                name="email"
                label="Insira o seu melhor e-mail"
                placeholder="endereço@domínio.com"
                value={userContact.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                InputLabelProps={{
                  sx: {
                    '&.Mui-focused': {
                      color: inputTheme.palette.text.secondary,
                    },
                    '&.MuiInputLabel-required': {
                      color: inputTheme.palette.primary.light,
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: inputTheme.palette.primary.main,
                  },
                }}
              />
            </div>

            <div className="mt-2 mb-2">
              <TextField
                type="tel"
                placeholder="Telefone com DDD(apenas números)"
                name="cellPhone"
                id="cellPhone"
                label="Insira o número de telefone"
                variant="outlined"
                inputProps={{
                  pattern: '[0-9]*',
                }}
                value={userContact.cellPhone}
                onChange={handlePhone}
                margin="normal"
                required
                fullWidth
                InputLabelProps={{
                  sx: {
                    '&.Mui-focused': {
                      color: inputTheme.palette.text.secondary,
                    },
                    '&.MuiInputLabel-required': {
                      color: inputTheme.palette.primary.light,
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: inputTheme.palette.primary.main,
                  },
                }}
              />
            </div>

            <div className="mt-10">
              <ThemeProvider theme={inputTheme}>
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary"
                  className="w-full inline-flex justify-center py-4 px-4 border-transparent text-md font-semibold hover:font-bold rounded-md bg-primary hover:bg-purple-600 text-white"
                >
                  Enviar
                </Button>
              </ThemeProvider>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
