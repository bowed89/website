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
              "JESUS MICHAEL LOPEZ AVERANGA", donde ofrezco mi servicio como
              desarrollador de aplicaciones web. Deseo verificar mi cuenta de administrador
              comercial con número de identificación 1097850594534002.

              Anexo la información para complementar mi solicitud:
            </li>

          </ul>

          <center>
            <p> Nombre: Jesús Michael López Averanga </p>
            <p>Identificación Fiscal: 3486389010</p>
            <p> Correo Electrónico: securesoft.bol@gmail.com</p>
            <p>Número Telefónico: +591 73509664</p>
            <p>Dirección: Av. Buenos Aires, Calle Cuarto Centenario 1012, Z/ Villa Nueva Potosi</p>
            <p> Nombre del Negocio: JESUS MICHAEL LOPEZ AVERANGA</p>
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
              "JESUS MICHAEL LOPEZ AVERANGA," where I offer my services as a
              web application developer. I wish to verify my business admin account with
              identification number 1097850594534002.

              I am providing the information to complete my request:

            </li>
          </ul>

          <center>
            <p> Name: Jesús Michael López Averanga </p>
            <p> Tax Identification: 3486389010</p>
            <p> Email: securesoft.bol@gmail.com</p>
            <p> Phone Number: +591 73509664</p>
            <p> Address: Av. Buenos Aires, Calle Cuarto Centenario 1012, Z/ Villa Nueva Potosi</p>
            <p> Business Name: JESUS MICHAEL LOPEZ AVERANGA</p>
            <p> Admin ID: 1097850594534002</p>
            <br />
          </center>
        </article>
      </div>
    </section>
  )
}

export default Facebook