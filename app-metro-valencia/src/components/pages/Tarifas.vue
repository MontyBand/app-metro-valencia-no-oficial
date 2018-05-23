<template>
  <div class="page--tarifas">
    <h1>Tarifas</h1>
    <hr>
    <section class="titulos-propios">
      <h3>Títulos propios de metroValencia</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">1 zona</th>
            <th scope="col">2 zonas</th>
            <th scope="col">3 zonas</th>
            <th scope="col">4 zonas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Sencillo</th>
            <td>1,50€</td>
            <td>2,10€</td>
            <td>2,80€</td>
            <td>3,90€</td>
          </tr>
          <tr>
            <th scope="row">Ida y Vuelta</th>
            <td>2,90€</td>
            <td>4,00€</td>
            <td>5,30€</td>
            <td>7,40€</td>
          </tr>
          <tr>
            <th scope="row">Bonometro</th>
            <td>7,60€</td>
            <td>11,00€</td>
            <td>14,70€</td>
            <td>21,00€</td>
          </tr>
          <tr>
            <th scope="row">Gent Major</th>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>9,70€</td>
          </tr>
          <tr>
            <th scope="row">Mobilitat Mensual</th>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>9,70€</td>
          </tr>
          <tr>
            <th scope="row">Mobilitat Anual</th>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>87,30€</td>
          </tr>
        </tbody>
      </table>
      <p class="notas">Notas</p>
      <ul>
        <li>Los menores de 10 años pueden viajar gratuitamente, acompañados de una persona mayor de edad, siempre y cuando no se supere el número de dos menores por cada título de transporte válido. A partir del tercero se deberá abonar el título completo.</li>
        <li>El precio del título no incluye el del soporte (Tarjeta Móbilis)</li>
      </ul>
    </section>
    <section class="tarjeta-tuin">
      <h3>Tarjeta TuiN</h3>
      <p>
        La TuiN es una tarjeta monedero para viajar por toda la red. Se valida de entrada y salida (en tranvía sólo de entrada). Para 1 o hasta 60 personas,si viajan juntas. Carga/regarga mínima 10 €.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">1 zona</th>
            <th scope="col">2 zonas</th>
            <th scope="col">3 zonas</th>
            <th scope="col">4 zonas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Precio por viaje</th>
            <td>0,72€</td>
            <td>1,04€</td>
            <td>1,40€</td>
            <td>2,00€</td>
          </tr>
          <tr>
            <th scope="row">Limite mensual *</th>
            <td>41,00€</td>
            <td>53,00€</td>
            <td>63,00€</td>
            <td>72,00€</td>
          </tr>
        </tbody>
      </table>
      <p>(*) La TuiN cargada en una tarjeta personalizada de FGV tiene un límite de consumo en el mes natural (según las zonas recorridas) a partir del cual los demás viajes son gratuitos para su titular (no sus acompañantes).</p>
    </section>
    <section class="tarjeta-mobilis">
      <h3>Tarjeta Móbilis</h3>
      <ul>
        <li>
          Es el soporte habitual en el que se graba un título de transporte de Metrovalencia.
        </li>
        <li>
          Puede ser de cartón o plástico (PVC).
        </li>
        <li>
          Es reutilizable para recargar el mismo título o cargar otro distinto cuando se haya agotado el anterior.
        </li>
        <li>
          Su precio es el siguiente:
          <ul>
            <li>
              Tarjeta Móbilis personalizada: 4,00 €
            </li>
            <li>
              Tarjeta Móbilis anónima (PVC): 2,00 €
            </li>
            <li>
              Tarjeta Móbilis anónima (cartón): 1,00 €
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageTarifas',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
