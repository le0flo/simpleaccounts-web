import './RegisterPanel.css'

export function RegisterPanel() {
  return (
    <div class="register-panel">
      <h2>Register</h2>

      <input type='text' name='antispam-seed' placeholder='Hashcash seed'></input>
      <input type='text' name='antispam-stamp' placeholder='Hashcash stamp'></input>
      <button>Verify</button>

      <div className="auth-container">
        <div className="auth-type-container">
          <label>TOTP</label>
          <input type='radio' name='register-authentication-type' value='totp'></input>
        </div>

        <div className="auth-type-container">
          <label>PGP</label>
          <input type='radio' name='register-authentication-type' value='pgp'></input>
        </div>
      </div>

      <button>Register</button>
    </div>
  )
};
