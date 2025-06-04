import './LoginPanel.css'

export function LoginPanel() {
  return (
    <div class="login-panel">
      <h2>Login</h2>

      <input type='email' name='login-identifier' placeholder='Identifier'></input>

      <div className="auth-container">
        <div className="auth-type-container">
          <label>TOTP</label>
          <input type='radio' name='login-authentication-type' value='totp'></input>
        </div>

        <div className="auth-type-container">
          <label>PGP</label>
          <input type='radio' name='login-authentication-type' value='pgp'></input>
        </div>
      </div>

      <button>Login</button>
    </div>
  )
};
