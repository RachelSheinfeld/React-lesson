import { useState } from "react";

const PasswordStrengthIndicator = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordBlur = () => {
    const len = password.length;

    if (len === 0) {
      setStrength("");
    } else if (len < 6) {
      setStrength("סיסמה חלשה ");
    } else if (len < 10) {
      setStrength("סיסמה בינונית ");
    } else {
      setStrength("סיסמה חזקה ");
    }
  };

  return (
    <>
      <div>Password Strength Indicator</div>

      <input
        type="password"
        placeholder="הכנס סיסמה"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
      />

      
      {strength && <p>{strength}</p>}
    </>
  );
};

export default PasswordStrengthIndicator;