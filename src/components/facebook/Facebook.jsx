import React from 'react'
import './facebook.css'

const Facebook = () => {
  return (
    <section id='facebook-verificacion'>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h2>FACEBOOK VERIFICACION (Español)</h2>
          </div>
          <ul className="service__list">
            <li>
              Mi nombre es Jesus Michael Lopez Averanga, soy dueño del negocio
              "LOPEZ AVERANGA JESUS MICHAEL", donde ofrezco mi servicio como
              desarrollador de aplicaciones web. Deseo verificar mi cuenta de administrador
              comercial con número de identificación 1097850594534002.

              Anexo la información para complementar mi solicitud:
            </li>

          </ul>

          <center>
            <p> Nombre: JESUS MICHAEL LOPEZ AVERANGA</p>
            <p>Identificación Fiscal: 3486389010</p>
            <p> Correo Electrónico: securesoft.bol@gmail.com</p>
            <p>Número Telefónico #1: +59122480829</p>
            <p>Número Telefónico #2: +59173509664</p>
            <p>Dirección: CALLE 4 TO CENTENARIO AV.BUENOS AIRES NR.1012, 0000 LA PAZ</p>
            <p> Nombre del Negocio: LOPEZ AVERANGA JESUS MICHAEL</p>
            <p>ID del Administrador: 1097850594534002</p>
            <br />
          </center>
        </article>
      </div>

      <div className="container services__container">
        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h2>FACEBOOK VERIFICATION (English)</h2>
          </div>
          <ul className="service__list">
            <li>
              My name is Jesus Michael Lopez Averanga, and I am the owner of the business
              "LOPEZ AVERANGA JESUS MICHAEL" where I offer my services as a
              web application developer. I wish to verify my business admin account with
              identification number 1097850594534002.

              I am providing the information to complete my request:

            </li>
          </ul>

          <center>
            <p> Name: JESUS MICHAEL LOPEZ AVERANGA </p>
            <p> Tax Identification: 3486389010</p>
            <p> Email: securesoft.bol@gmail.com</p>
            <p> Phone Number #1: +59122480829</p>
            <p> Phone Number #2: +59173509664</p>
            <p> Address: CALLE 4 TO CENTENARIO AV.BUENOS AIRES NR.1012, 0000 LA PAZ</p>
            <p> Business Name: LOPEZ AVERANGA JESUS MICHAEL</p>
            <p> Admin ID: 1097850594534002</p>
            <br />
          </center>
        </article>
      </div>
    </section>
  )
}

export default Facebook