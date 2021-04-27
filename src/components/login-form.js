import classes from './login.module.css';

export default function LoginForm() {
  return (
    <div className={classes.form}>
      <h2>Login</h2>
      <div className={classes.fourCols}>
        <div className={classes.row}>
          <div className={classes.threeCols}>
            <label htmlFor="email">Email</label>
            <div className={classes.inputContainer}>
              <input type="email" id="email" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.threeCols}>
            <label htmlFor="password">Password</label>
            <div className={classes.inputContainer}>
              <input type="password" id="password" placeholder="Password" />
            </div>
          </div>
          <button>Forgot Password</button>
        </div>
        <div className={classes.row}>
          <div className={classes.threeCols}>
            <button>Login</button>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.signup}>
          Don't have an account yet?&nbsp;
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
}
