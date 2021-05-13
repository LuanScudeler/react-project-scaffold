import React, { useContext, memo } from 'react';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import 'moment-timezone';
import { sessionContext } from 'services/contextService';
import { TextField } from '@material-ui/core';
import styles from './login.style';
import { api } from './loginApi';

const useStyles = makeStyles(styles);

function initializeSession(setPersistedSession) {
  const appSession = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  moment.tz.setDefault(appSession.timeZone);
  setPersistedSession(appSession);
}

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const { setPersistedSession } = useContext(sessionContext);
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      await api.login.post(data);
      initializeSession(setPersistedSession);
      history.push('/landing-page');
    } catch (error) {
      if (!error.wasHandled) toast.error('Sign in failed.');
    }
  };

  return (
    <div className={classes.loginContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={classes.spacing}
          inputRef={register({ required: 'Username is required.' })}
          error={!!errors.username}
          helperText={errors.username && errors.username.message}
          name="username"
          label="Username"
          variant="filled"
        />
        <TextField
          inputRef={register({ required: 'Password is required.' })}
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
          type="password"
          name="password"
          label="Password"
          variant="filled"
        />
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Log in
        </Button>
      </form>
    </div>
  );
}

export default memo(Login);
