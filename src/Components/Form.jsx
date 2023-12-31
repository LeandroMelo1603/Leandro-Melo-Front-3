import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (name.length <= 5 || !validarMail(email)) {
      setError("Por favor verifique su información nuevamente");
      return;
    }else {
      setError(false)
      setSuccess(true);

    }
    
  };

    const validarMail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escriba su nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Escriba su correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p style={{background: 'red', color: 'white', fontWeight: 'bold', textAlign:'center', padding:'10px'}}>{error}</p>}

        <button type="submit">Enviar</button>
      </form>

      {success && (
        <p style={{background: 'green', color: 'white', fontWeight: 'bold', textAlign:'center', padding:'10px'}}>
          Gracias {name}, te contactaremos lo antes posible vía correo electrónico.
        </p>
      )}
    </div>
  );
};

export default Form;

