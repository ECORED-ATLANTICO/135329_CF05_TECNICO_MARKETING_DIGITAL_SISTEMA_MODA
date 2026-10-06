<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Proceso de ventas y fidelización de clientes',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión del aprendiz sobre los conceptos relacionados con el proceso de ventas, la comunicación con clientes, la implementación de CRM y las estrategias de fidelización mediante la resolución de preguntas de selección múltiple, a partir de la identificación de conceptos clave desarrollados en el componente formativo relacionados con ventas, canales comerciales, comunicación digital y gestión de clientes.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué representa una venta dentro del proceso comercial empresarial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Satisfacer necesidades mediante intercambio de productos o servicios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Únicamente entregar productos sin generar beneficios para el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir la comunicación entre vendedores y compradores potenciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente las estrategias de marketing organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál característica distingue una venta simple o self-service?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Requiere asesoría permanente durante toda la negociación comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El cliente realiza la compra con mínima intervención del vendedor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se desarrolla únicamente mediante reuniones presenciales especializadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exige procesos extensos antes de concretar cada negociación comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza principalmente una venta compleja?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El cliente compra sin requerir información del producto ofrecido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se realiza únicamente mediante plataformas automáticas de comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Demanda asesoría especializada durante el proceso de decisión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Elimina completamente la interacción entre vendedor y comprador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué finalidad tiene el proceso de ventas empresarial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir la planeación comercial mediante acciones improvisadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir las oportunidades de concretar negocios exitosos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar etapas necesarias durante la relación comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar actividades para alcanzar ventas efectivas y sostenibles.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Con cuál etapa inicia normalmente un proceso de ventas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Prospección de clientes potenciales según necesidades identificadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cierre definitivo de la negociación comercial propuesta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Seguimiento posterior a la entrega del producto adquirido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presentación formal de garantías después de la compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué propósito tiene la calificación de leads comerciales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar oportunidades comerciales identificadas previamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Priorizar clientes potenciales con mayores posibilidades de compra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir la prospección mediante campañas publicitarias generales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir el conocimiento sobre necesidades de los compradores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué función cumplen los canales de venta organizacionales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar únicamente los costos asociados al proceso comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar el contacto entre empresa y consumidores finales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilitar el acceso del cliente a productos o servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente las estrategias de promoción empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué distingue los canales de venta online actualmente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Funcionan únicamente mediante establecimientos físicos tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exigen presencia permanente del comprador en la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminan completamente el uso de plataformas digitales comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Operan utilizando Internet para comercializar productos y servicios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué objetivo persigue el social selling en redes sociales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Construir relaciones comerciales mediante interacción con clientes potenciales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar totalmente la comunicación personalizada durante las ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir la presencia digital de las organizaciones comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la generación de contenido para comunidades digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué aporta el social selling al proceso comercial digital?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limitar la interacción entre marcas y consumidores digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer relaciones de confianza antes de concretar la venta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente el proceso tradicional de ventas consultivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar el seguimiento posterior realizado a los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué propósito cumplen las técnicas de venta consultiva actuales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la comunicación entre vendedor y cliente potencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar necesidades para ofrecer soluciones acordes al cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente el proceso de negociación comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir el análisis realizado antes de presentar una propuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué representa una objeción durante el proceso de venta?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una inquietud o duda expresada por el cliente potencial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una decisión definitiva de rechazar cualquier propuesta comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una estrategia utilizada únicamente por el equipo comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un procedimiento administrativo previo al cierre de ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué favorece atender adecuadamente las objeciones del cliente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el interés del comprador durante la negociación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer la confianza y facilitar la decisión de compra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir el proceso comercial mediante promociones temporales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de argumentar beneficios del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué indica normalmente el cierre exitoso de una venta?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La suspensión definitiva de la comunicación con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La eliminación de actividades posteriores a la negociación comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La aceptación de la propuesta comercial por parte del cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La finalización de todas las estrategias de fidelización empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué objetivo tiene realizar seguimiento después de la venta?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar satisfacción y fortalecer la relación con el cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el contacto posterior entre empresa y comprador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los procesos de servicio al cliente establecidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar futuras oportunidades comerciales con el consumidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué beneficio aporta mantener comunicación posterior con el cliente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disminuir la confianza generada durante el proceso comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Favorecer la fidelización mediante una relación comercial continua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar oportunidades de recompra para los consumidores actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir programas de servicio por campañas promocionales aisladas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué fortalece la confianza durante una negociación comercial efectiva?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Promesas sin respaldo sobre beneficios del producto ofrecido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Información clara, honesta y orientada a las necesidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar espacios para resolver inquietudes del comprador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la interacción entre vendedor y cliente potencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué característica distingue una relación comercial sostenible?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Finalizar el contacto inmediatamente después de la compra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Priorizar únicamente el cumplimiento de metas de ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener vínculos basados en confianza, valor y satisfacción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Limitar la comunicación con clientes frecuentes de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué resultado genera aplicar correctamente técnicas de venta consultiva?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar posibilidades de satisfacción y cierre exitoso de ventas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente el seguimiento posterior a la negociación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir la identificación de necesidades del consumidor potencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la importancia del servicio durante la comercialización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué aporta una gestión comercial centrada en el cliente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la competitividad de la organización frente al mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer relaciones duraderas mediante experiencias de valor compartido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar estrategias de fidelización implementadas por la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir la orientación al cliente por objetivos exclusivamente financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
