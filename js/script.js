const modals = [
  {
    title: "Sistema TransMilenio Bogotá",
    body:
      "El transporte en la ciudad de Bogotá ha sido sometido a análisis de corte financiero y técnico, que han concluido que, a pesar de ser visto en un principio como la solución a los problemas de movilidad de la ciudad, el sistema presenta varios problemas estructurales (alto precio de los pasajes, ineficacia para crecer con la demanda, bloqueos, protestas, largas filas, etc.) que desembocaron en una crisis multidimensional (financiera, técnica, sociocultural e incluso urbanística).",
  },
  {
    title: "Transporte de última milla en Seúl",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
        Un estudio realizado en Seúl mostró factores de la popularidad que han ganado los modelos de scooters eléctricos compartidos en la ciudad. Comparan además, factores de tiempo de desplazamiento, tiempo de acceso y costo con medios de transporte más convencionales, como buses de última milla o incluso los desplazamientos a pie.
        </p>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="media/busSeul.jpg"/>
      </div>
    </div>
    `,
  },
  {
    title: "Bike-Sharing en Portland",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
        En Portland, Oregon, First Transit llegó a un acuerdo con Lyft para BIKETOWN, un sistema de bicicletas eléctricas compartidas. Este sistema permite la operación de 1500 bicicletas a lo largo de 30 millas cuadradas, con aproximadamente 140 estaciones en total. Este modelo, en menor o mayor medida, lo impulsan ciudades como Kansas City, San Francisco o Dayton en Estados Unidos, y múltiples ciudades más a nivel mundial.
        </p>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="media/largeBiketown.jpg"/>
      </div>
    </div>
    `,
  },
  {
    title: "Efectos a la salud en Europa",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
        El uso de alternativas de última milla en Europa ha impactado positivamente a la salud de los habitantes. Especialmente los desplazamientos en bicicletas (incluso eléctricas) tienen impactos positivos en la salud, ya que aumentan la cantidad de actividad física comparada con los no-usuarios. Además, estos modelos de transporte incentivan la reducción del uso de automóviles. Sin embargo, la reducción ha sido marginal en el corto plazo.
        </p>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="https://www.flaticon.es/premium-icon/icons/svg/773/773869.svg"/>
      </div>
    </div>
    `,
  },
  {
    title: "Modelos de transporte a futuro",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
        Estudios indican que, en comparación a un servicio con rutas y horarios fijos, un sistema de última milla emergente opera en una amplia diversidad de contextos. Diversos experimentos computacionales muestran que se mejoran los tiempos de espera de los pasajeros, de igual manera que sus tiempos de desplazamiento. Esto se logra haciendo uso de información del transporte masivo como hora de llegada de los trenes o buses.
        </p>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="https://www.flaticon.es/premium-icon/icons/svg/773/773869.svg"/>
      </div>
    </div>
    `,
  },
  {
    title: "Ineficiencia del transporte público Bogotano",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
          El transporte público en Bogotá presenta una serie de problemas multidimensionales entre los que se incluye la inseguridad (DNP, 2020), la indisponibilidad del servicio, el retraso de este (SDM, 2019), su crecimiento ineficaz ante la demanda y el alto precio de los pasajes (María et al., 2017), que resultan en una percepción mediocre del sistema por parte de los usuarios como lo expresan las calificaciones de 3,1 y 3 para la experiencia de viaje de los servicios zonales y troncales, respectivamente.
        </p>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="https://www.flaticon.es/premium-icon/icons/svg/773/773869.svg"/>
      </div>
    </div>
    `,
  },
  {
    title: "Baja utilización de alternativas complementarias con el SITP",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
          Medios como las patinetas, bicitaxis y otros medios de transporte, en conjunto corresponden a sólo el 1,5% de las etapas de viaje de los ciudadanos (patinetas-0,1%, bicitaxis-0,4%, otros-1%). En su lugar se prefiere la caminata como principal forma de desplazamiento por etapas, correspondiente al 31% de las etapas de viaje.
        </p>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="https://www.flaticon.es/premium-icon/icons/svg/773/773869.svg"/>
      </div>
    </div>
    `,
  },
  {
    title: "Se requieren plantear soluciones al desplazamiento de última milla",
    body: `
    <div class="row">
          <div class="col-6">
        <ul>
          <li>Elemento</li>
          <li>Elemento</li>
          <li>Elemento</li>
          <li>Elemento</li>
          <li>Elemento</li>
        </ul>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="https://www.flaticon.es/premium-icon/icons/svg/773/773869.svg"/>
      </div>
    </div>
    `,
  },
  {
    title: "Política",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
        En materia de política pública la movilidad es uno de los principales puntos de interés de cualquier administración de la ciudad, para cuyo mejoramiento deben articularse tanto políticas previas como actuales de acuerdo con los principios adoptados según iniciativas como la iniciativa Visión Cero, y los objetivos establecidos en planes organizacionales de largo plazo como lo son el Plan Maestro de Movilidad y el Plan Distrital de Desarrollo.
        </p>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="media/VisionCerologo.png"/>
          <img class="w-100" src="media/politica.PNG"/>
      </div>
    </div>
    `,
  },
  {
    title: "Economía",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
        En el aspecto económico, para el año 2021, la ciudad tiene planeada una inversión de $3.180.250.700.000 en lo que respecta al sector de movilidad, 21,1% del presupuesto total. Dicho monto está repartido en $430.877.239.000 para la Secretaría Distrital de Movilidad, $2.615.039.772.000 para el Instituto de Desarrollo Urbano y $134.333.689.000 para la Unidad Administrativa Especial de Rehabilitación y Mantenimiento Vial, de acuerdo con lo establecido en el Plan Operativo Anual de Inversiones (POAI) 2021 (SDP, 23 de diciembre de 2020).
        </p>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="media/econo.png"/>
          
      </div>
    </div>
    `,
  },
  {
    title: "Social",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
        En relación con el uso de medios de transporte diferentes a los medios motorizados convencionales para viajes intermodales es posible evidenciar que existe una adopción mínima de medios como las patinetas y bicitaxis y otros medios de transporte, los cuales en conjunto corresponden a sólo el 1,5% de las etapas de viaje de los ciudadanos, de acuerdo con los resultados de la encuesta de movilidad 2019.
        </p>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      
      <div class="col-6">
        <img class="w-100" src="media/barrasSocial.png"/>
        
      </div>`,
  },
  {
    title: "Tecnología",
    body: `
    <div class="row">
      <div class="col-6">
        <p>
        En relación con el transporte público hay información detallada sobre el tamaño de su flota y la tecnología utilizada. De acuerdo con lo presentado por Transmilenio S.A en su informe de estadísticas de oferta y demanda a febrero de 2021, la flota se compone de:
          </p>
        <ul>
        <li>2357 buses de servicio troncal</li>
        <li>931 buses alimentadores</li>
        <li>6174 buses de servicio zonal.</li>
        </ul>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      
      <div class="col-6">
        <img class="w-100" src="./media/tech1.png"/>
      </div>`,
  },
  {
    title: "Ambiental",
    body: `
    <div class="row">
      <div class="col-6">
        <ul>
          <li>El sector transporte en Bogotá, representa el 58% de las emisiones de GEI en la Ciudad, lo que se traduce en una emisión estimada de  0.6 toneladas de CO2eq por año por parte de los bogotanos (DNP, 2020).</li>
          <li>Para el 31 de diciembre de 2019, se habían matriculado en Bogotá 1.466 vehículos exclusivamente eléctricos, siendo tan solo el 0.06% del total de vehículos registrados en la ciudad (DNP, 2020).</li>
          <li>Existen diferentes normas en materia ambiental que promueven la adopción de tecnologías de energía renovable y estrategias de eficiencia energética, como la ley 1715 de 2014.</li>
          <!--<li>Departamento Nacional de Planeación (DNP). (15 de julio de 2020). Implementación del sistema de  transporte de cero y bajas emisiones para Bogotá. Secretaría Distrital de Movilidad. Recuperado el 20 de marzo de 2021 de <a target="blank" href="http://www.sdp.gov.co/sites/default/files/113_sdm_2020110010120_7583_0.pdf">sdp.gov.co</a></li>-->
        </ul>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="media/ambiental.png"/>
      </div>
    </div>
    `,
  },
  {
    title: "Legal",
    body: `
    <div class="row">
      <div class="col-6">
        <ul>
          <li>A nivel nacional todos los actores viales se encuentran sujetos a lo establecido en el Código Nacional de Tránsito.</li>
          <li>El artículo 164 del Decreto 190 de 2004, del Plan de Ordenamiento Territorial establece los componentes del subsistema vial de Bogotá.</li>
          <li>La Secretaría de Movilidad de Bogotá cumple el papel de autoridad de tránsito y transporte (decreto 672 de 2018), incluyendo funciones de control e investigación en materia de transporte público.</li>
          <!--<li>El decreto 1079 de 2015 o decreto único reglamentario del sector transporte, que dicta las disposiciones generales para el préstamo del servicio de transporte en las diferentes modalidades (servicio público de transporte colectivo, SETP, transporte público masivo, taxis, servicio de transporte mixto, en motocarro, servicio de transporte especial).</li>
          <li>La resolución 3256 de 2018 del Ministerio de Transporte, reglamenta y autoriza la prestación del servicio público de transporte de pasajeros en triciclos o tricimóviles no motorizados y tricimóviles con pedaleo asistido.</li>
          <li>La resolución 336 de 2019 de la Secretaría de Movilidad, la cual regula la autorización para el préstamo de patinetas en espacios públicos.</li>-->
        </ul>
        <div class="plus-button" onclick="showInnerModal(0)">+</div>
      </div>
      <div class="col-6">
        <img
          class="w-100"
          src="https://www.flaticon.es/premium-icon/icons/svg/773/773869.svg"/>
      </div>
    </div>
    `,
  },
];

window.showModal = function (index) {
  $("#infoModalLabel").html(modals[index].title);
  $("#infoModalBody").html(modals[index].body);
  $("#infoModal").modal("show");
};

window.showInnerModal = function (index) {
  $("#infoModalLabel").html(modals[index].title);
  $("#infoModalBody").html(modals[index].body);
};
