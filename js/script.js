const modals = [
  {
    title: 'Sistema TransMilenio Bogotá',
    body:
      'El transporte en la ciudad de Bogotá ha sido sometido a análisis de corte financiero y técnico, que han concluido que, a pesar de ser visto en un principio como la solución a los problemas de movilidad de la ciudad, el sistema presenta varios problemas estructurales (alto precio de los pasajes, ineficacia para crecer con la demanda, bloqueos, protestas, largas filas, etc.) que desembocaron en una crisis multidimensional (financiera, técnica, sociocultural e incluso urbanística).',
  },
  {
    title: 'Sistema SIT Curitiba, Brasil',
    body:
      'El éxito del sistema BRT de Curitiba se puede atribuir a distintos factores. Uno de ellos es que el 75% del área metropolitana de Curitiba está cubierta por el sistema BRT. Expertos indican que: “Habiendo varios medios de transporte accesibles, el viajero discapacitado tiene varias opciones; por ejemplo, una persona en silla de ruedas puede llamar a un taxi, ir al paradero a tomar un autobús Ligeirinho y transbordar a otro Ligeirinho en una terminal de integración para llegar a su destino.”',
  },
  {
    title: 'Transporte masivo en el mundo',
    body:
      'Ciudades en todo el mundo ven como un complemento a los sistemas BRT la implementación de un sistema Metro, especialmente cuando la demanda supera los picos de 40.000 pasajeros hora/sentido. “Sin embargo, optar por un Tren a Nivel (Tren Ligero o Tranvía) o simples Carriles de Buses es anacrónico."',
  },
  {
    title: 'Alternativas de transporte en el mundo',
    body:
      'La ciudad pionera en el transporte compartido en el mundo fue Amsterdam, que en 1965 inauguró el primer modelo de transporte público de bicicletas compartidas. Desde ese momento, se ha iterado en este modelo hasta hoy, donde ciudades como Munich, París, Barcelona y Ciudad de México poseen modelos de bicicletas públicas compartidas que han desembocado en un mayor uso de vías públicas, disminución de emisión de gases de invernadero, y una mejora en salud pública.',
  },
  {
    title: 'Ineficiencia del transporte público Bogotano',
    body:
      'El transporte público en Bogotá presenta una serie de problemas multidimensionales entre los que se incluye la inseguridad (DNP, 2020), la indisponibilidad del servicio, el retraso de este (SDM, 2019), su crecimiento ineficaz ante la demanda y el alto precio de los pasajes (María et al., 2017), que resultan en una percepción mediocre del sistema por parte de los usuarios como lo expresan las calificaciones de 3,1 y 3 para la experiencia de viaje de los servicios zonales y troncales, respectivamente.',
  },
  {
    title: 'Baja utilización de alternativas complementarias con el SITP',
    body:
      'Medios como las patinetas, bicitaxis y otros medios de transporte, en conjunto corresponden a sólo el 1,5% de las etapas de viaje de los ciudadanos (patinetas-0,1%, bicitaxis-0,4%, otros-1%). En su lugar se prefiere la caminata como principal forma de desplazamiento por etapas, correspondiente al 31% de las etapas de viaje.',
  },
  {
    title: 'Se requieren plantear soluciones al desplazamiento de última milla',
    body: `
    <ul>
      <li>Elemento</li>
      <li>Elemento</li>
      <li>Elemento</li>
      <li>Elemento</li>
      <li>Elemento</li>
    </ul>
    `,
  },
  {
    title: 'Política',
    body:
      'Entre los diferentes proyectos de inversión propuestos se encuentra la expansión de la oferta de SITP-transmilenio (proyecto 7782 del PDD 2020-2024), la construcción del metro de la ciudad como alternativa del transporte masivo (proyecto 7501 del PDD 2020-2024), la articulación de diferentes medios de transporte (proyecto 7786 del PDD 2020-2024), y el fomento de apropiación ciudadana del Sistema Integrado de Transporte Público de Bogotá (proyecto 7513_262 del PDD 2020-2024).',
  },
  {
    title: 'Economía',
    body:
      'En el aspecto económico, para el año 2021, la ciudad tiene planeada una inversión de $3.180.250.700.000 en lo que respecta al sector de movilidad, 21,1% del presupuesto total. Dicho monto está repartido en $430.877.239.000 para la Secretaría Distrital de Movilidad, $2.615.039.772.000 para el Instituto de Desarrollo Urbano y $134.333.689.000 para la Unidad Administrativa Especial de Rehabilitación y Mantenimiento Vial, de acuerdo con lo establecido en el Plan Operativo Anual de Inversiones (POAI) 2021 (SDP, 23 de diciembre de 2020). <br/> En el caso de la inversión enfocada directamente en transporte masivo, para 2021, se cuenta con un presupuesto aproximado de $400 mil millones, de los cuales $6.421 millones de pesos corresponden con la inversión en los objetivos 3 y 4 del proyecto de Fortalecimiento de una movilidad sostenible y accesible para Bogotá y su Región (DNP, 15 de julio de 2020), a cargo de la SDM; $210.620.767.000 corresponden con la inversión en el proyecto de  Infraestructura para el Sistema Integrado de Transporte Público Sostenible, y $183.500.000.000 corresponden con el proyecto de Integración funcional del Regiotram a la estructura urbana de la Ciudad, ambos a cargo del IDU (SDP, 23 de diciembre de 2020).',
  },
  {
    title: 'Social',
    body: `La percepción de los habitantes sobre la mayoría de los medios de transporte disponibles en la ciudad es algo baja respecto a lo deseado, puesto que solo el Cable tiene una puntuación superior a 4 en una escala sobre 5 para la calificación de la experiencia de viaje. Le siguen la bicicleta con una puntuación de 3,9, el desplazamiento a pie, la patineta, la moto y el transporte informal con una puntuación de 3,8, mientras que el taxi y el auto tienen 3,7 puntos, el transporte escolar y otros medios de transporte tienen 3,6 puntos y el transporte intermunicipal tiene 3,4, los alimentadores y SITPs provisionales tienen 3,3, y el bicitaxi tiene 3,2 puntos.
      <div id="carousel3ExampleControls" class="carousel slide mt-3"
        data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active pl-3 pr-2">
            <div class="row">
              <div class="col-8 offset-2">
                <img class="w-100" src="./media/social1.png"/>
              </div>
            </div>
          </div>
          <div class="carousel-item pl-3 pr-2">
            <div class="row">
              <div class="col-8 offset-2">
                <img class="w-100" src="./media/social2.png"/>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carousel3ExampleControls"
          role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel3ExampleControls"
          role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`,
  },
  {
    title: 'Tecnología',
    body: `En relación con el transporte público hay información más detallada de acuerdo con las cantidades y tecnologías de su flota. De acuerdo con lo presentado por Transmilenio S.A en su informe de estadísticas de oferta y demanda a febrero de 2021, la flota se compone de 2357 buses de servicio troncal, 931 buses alimentadores y 6174 buses de servicio zonal. Según el nivel de emisiones, el primer grupo está conformado en un 10% por buses Euro II, III y IV, en un 20% por buses Euro V, en un 29% por buses Euro V con filtro, en un 31% por buses Euro VI y en un 10% por buses híbridos. En el caso de los alimentadores el 13% corresponde a buses Euro II, III y IV, el 54% a Euro V, el 14% a Euro VI, el 5% a híbridos y el 14% a buses eléctricos. Y en el caso de los buses zonales, el 24% corresponde a buses Euro I, II y III, el 16% a buses Euro IV, el 46% a buses Euro V, el 1% a buses híbridos, el 1% a Euro VI, el 10% a Euro VI-GNC y el 2% a buses eléctricos.
      <div id="carousel2ExampleControls" class="carousel slide mt-3"
        data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active pl-3 pr-2">
            <div class="row">
              <div class="col-8 offset-2">
                <img class="w-100" src="./media/tech1.png"/>
              </div>
            </div>
          </div>
          <div class="carousel-item pl-3 pr-2">
            <div class="row">
              <div class="col-8 offset-2">
                <img class="w-100" src="./media/tech2.png"/>
              </div>
            </div>
          </div>
          <div class="carousel-item pl-3 pr-2">
            <div class="row">
              <div class="col-8 offset-2">
                <img class="w-100" src="./media/tech3.png"/>
              </div>
            </div>
          </div>
          <div class="carousel-item pl-3 pr-2">
            <div class="row">
              <div class="col-8 offset-2">
                <img class="w-100" src="./media/tech4.png"/>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carousel2ExampleControls"
          role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel2ExampleControls"
          role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`,
  },
  {
    title: 'Ambiental',
    body: `
    <ul>
      <li>El sector transporte en Bogotá, representa el 58% de las emisiones de GEI en la Ciudad, lo que se traduce en una emisión estimada de  0.6 toneladas de CO2eq por año por parte de los bogotanos (DNP, 2020).</li>
      <li>Para el 31 de diciembre de 2019, se habían matriculado en Bogotá 1.466 vehículos exclusivamente eléctricos, siendo tan solo el 0.06% del total de vehículos registrados en la ciudad (DNP, 2020).</li>
      <li>Existen diferentes normas en materia ambiental que promueven la adopción de tecnologías de energía renovable y estrategias de eficiencia energética, como la ley 1715 de 2014.</li>
      <li>Departamento Nacional de Planeación (DNP). (15 de julio de 2020). Implementación del sistema de  transporte de cero y bajas emisiones para Bogotá. Secretaría Distrital de Movilidad. Recuperado el 20 de marzo de 2021 de <a target="blank" href="http://www.sdp.gov.co/sites/default/files/113_sdm_2020110010120_7583_0.pdf">sdp.gov.co</a></li>
    </ul>
      `,
  },
  {
    title: 'Legal',
    body: `
    <ul>
      <li>A nivel nacional todos los actores viales se encuentran sujetos a lo establecido en el Código Nacional de Tránsito.</li>
      <li>El artículo 164 del Decreto 190 de 2004, del Plan de Ordenamiento Territorial establece los componentes del subsistema vial de Bogotá.</li>
      <li>La Secretaría de Movilidad de Bogotá cumple el papel de autoridad de tránsito y transporte (decreto 672 de 2018), incluyendo funciones de control e investigación en materia de transporte público.</li>
      <li>El decreto 1079 de 2015 o decreto único reglamentario del sector transporte, que dicta las disposiciones generales para el préstamo del servicio de transporte en las diferentes modalidades (servicio público de transporte colectivo, SETP, transporte público masivo, taxis, servicio de transporte mixto, en motocarro, servicio de transporte especial).</li>
      <li>La resolución 3256 de 2018 del Ministerio de Transporte, reglamenta y autoriza la prestación del servicio público de transporte de pasajeros en triciclos o tricimóviles no motorizados y tricimóviles con pedaleo asistido.</li>
      <li>La resolución 336 de 2019 de la Secretaría de Movilidad, la cual regula la autorización para el préstamo de patinetas en espacios públicos.</li>
    </ul>
      `,
  },
];

window.showModal = function (index) {
  $('#infoModalLabel').html(modals[index].title);
  $('#infoModalBody').html(modals[index].body);
  $('#infoModal').modal('show');
};
