import React, { useState } from "react";
import { Button, Modal } from "antd";
import "../styles/TermsAndConditionsModal.css";

const TermsAndConditionsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li class="header__menu--item" onClick={showModal}>
        POLITICA DE PRIVACIDAD
      </li>
      <Modal
        title="POLITICA DE PRIVACIDAD"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button className="button_modal" onClick={handleOk}>
            Aceptar
          </button>,
        ]}
      >
        <h3>
          <strong>1. OBJETIVO</strong>
        </h3>
        <p>
          En cumplimiento de lo dispuesto en la Ley 1581 de 2012 y el Decreto
          1377 de 2013, ASCENSORES EDEL’S GROUP S.A.S., en adelante "la
          Empresa", establece la presente Política de Tratamiento de Datos
          Personales con el fin de garantizar la protección, seguridad y
          confidencialidad de la información de sus clientes, proveedores,
          empleados y terceros.
        </p>
        <br />
        <br />
        <h3>
          <strong>2.RESPONSABLE DEL TRATAMIENTO DE DATOS</strong>
        </h3>
        <ul>
          <li>Razón Social: Ascensores EDEL’S GROUP S.A.S.</li>
          <li>NIT: 900.722.547-1</li>
          <li>Dirección: Carrera 65 No. 12A-76</li>
          <li>Teléfono: 3186925825</li>
          <li>Correo Electrónico: notificaciones.edel@gmail.com</li>
        </ul>
        <br />
        <br />
        <h3>
          <strong>3. FINALIDAD DEL TRATAMIENTO DE DATOS</strong>
        </h3>
        <p>
          Los datos personales recolectados por la Empresa serán utilizados para
          los siguientes fines: Gestionar la prestación de servicios de
          instalación, mantenimiento y modernización de ascensores. Atender
          solicitudes, quejas y reclamos de clientes y usuarios. Cumplir con
          obligaciones legales y contractuales. Realizar procesos de facturación
          y cobranza. Publicar fotografías, nombre y lugar de ubicación de los
          ascensores instalados por nuestra empresa para fines publicitarios.
          Enviar información comercial, promociones y novedades sobre nuestros
          servicios, siempre que el titular haya otorgado su autorización
          expresa. Implementar medidas de seguridad y control en nuestras
          instalaciones y plataformas digitales.
        </p>
        <br />
        <br />
        <h3>
          <strong>4. DERECHOS DE LOS TITULARES</strong>
        </h3>
        <p>
          Los titulares de los datos personales tienen los siguientes derechos:
          Conocer, actualizar y rectificar sus datos personales. Solicitar
          prueba de la autorización otorgada para el tratamiento de sus datos.
          Ser informado sobre el uso que se les ha dado a sus datos. Presentar
          quejas ante la Superintendencia de Industria y Comercio por
          infracciones a la normatividad de protección de datos. Revocar la
          autorización y/o solicitar la supresión de sus datos cuando no se
          respeten los principios y derechos constitucionales y legales.
        </p>
        <br />
        <br />
        <h3>
          <strong> 5. MECANISMOS PARA EL EJERCICIO DE LOS DERECHOS</strong>
        </h3>
        <p>
          Los titulares pueden ejercer sus derechos a través de los siguientes
          medios: Correo electrónico: notificaciones.edel@gmail.com
          Teléfono:3186925825 Oficina física: Carrera 65 No. 12A-76 La Empresa
          atenderá las solicitudes dentro de los términos establecidos por la
          Ley 1581 de 2012.
        </p>
        <br />
        <br />
        <h3>
          <strong> 6. SEGURIDAD DE LA INFORMACIÓN</strong>
        </h3>
        <p>
          La Empresa implementará medidas técnicas, humanas y administrativas
          necesarias para garantizar la seguridad de los datos personales y
          evitar su adulteración, pérdida, consulta, uso o acceso no autorizado.
        </p>
        <br />
        <br />
        <h3>
          <strong> 7. VIGENCIA</strong>
        </h3>
        <p>
          La presente política entra en vigencia desde su publicación y los
          datos serán tratados por el tiempo necesario para cumplir con las
          finalidades establecidas o hasta que el titular solicite su
          eliminación, salvo que exista una obligación legal que impida su
          supresión. Para más información, puede contactarnos a través de los
          canales de atención mencionados anteriormente.
        </p>
      </Modal>
    </>
  );
};

export default TermsAndConditionsModal;
