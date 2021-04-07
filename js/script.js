const modals = [
  {
    title: "Sistema TransMilenio Bogotá",
    body:
      "El transporte en la ciudad de Bogotá ha sido sometido a análisis de corte financiero y técnico, que han concluido que, a pesar de ser visto en un principio como la solución a los problemas de movilidad de la ciudad, el sistema presenta varios problemas estructurales (alto precio de los pasajes, ineficacia para crecer con la demanda, bloqueos, protestas, largas filas, etc.) que desembocaron en una crisis multidimensional (financiera, técnica, sociocultural e incluso urbanística).",
  },
  {
    title: "Sistema SIT Curitiba, Brasil",
    body:
      "El éxito del sistema BRT de Curitiba se puede atribuir a distintos factores. Uno de ellos es que el 75% del área metropolitana de Curitiba está cubierta por el sistema BRT. Expertos indican que: “Habiendo varios medios de transporte accesibles, el viajero discapacitado tiene varias opciones; por ejemplo, una persona en silla de ruedas puede llamar a un taxi, ir al paradero a tomar un autobús Ligeirinho y transbordar a otro Ligeirinho en una terminal de integración para llegar a su destino.”",
  },
  {
    title: "Transporte masivo en el mundo",
    body:
      'Ciudades en todo el mundo ven como un complemento a los sistemas BRT la implementación de un sistema Metro, especialmente cuando la demanda supera los picos de 40.000 pasajeros hora/sentido. “Sin embargo, optar por un Tren a Nivel (Tren Ligero o Tranvía) o simples Carriles de Buses es anacrónico."',
  },
  {
    title: "Alternativas de transporte en el mundo",
    body:
      "La ciudad pionera en el transporte compartido en el mundo fue Amsterdam, que en 1965 inauguró el primer modelo de transporte público de bicicletas compartidas. Desde ese momento, se ha iterado en este modelo hasta hoy, donde ciudades como Munich, París, Barcelona y Ciudad de México poseen modelos de bicicletas públicas compartidas que han desembocado en un mayor uso de vías públicas, disminución de emisión de gases de invernadero, y una mejora en salud pública.",
  },
  { title: "lorem", body: "sdsdf sdf sdf sd fgsgsgsdgfsdfsdfsdf" },
  { title: "lorem", body: "sdsdf sdf sdf sd fgsgsgsdgfsdfsdfsdf" },
];

window.showModal = function (index) {
  $("#infoModalLabel").text(modals[index].title);
  $("#infoModalBody").text(modals[index].body);
  $("#infoModal").modal("show");
};
