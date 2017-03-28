# Table Column Toggler
Is a angular directive for toggle columms on a table:

Getting started:

Example:
`
<table class="registros" table-column-toggler-table> 
<thead>
  <tr> 
      <th hide><a href="javascript:" >DNI</a></th>
      <th hide><a href="javascript:" >Genero</a></th>
      <th><a href="javascript:" >Apellido</a></th>  
      <th><a href="javascript:" >Nombre</a></th>   
      <th><a href="javascript:" >nombres</a></th> 
      <th ignore></th>
  </tr>
</thead>
<tbody>
<!-- | orderBy: 'nombrelista'  --> 
  <tr ng-repeat="item in items " ng-if="items" table-column-toggler-repeat>
      <td ng-bind="item.dni"></td>
      <td ng-bind="item.genero"></td>
      <td ng-bind="item.apellido"></td>
      <td ng-bind="item.campo"></td>
      <td ng-bind="item.campo"></td>
      <td>
          <button></button>
      </td>
  </tr>
</tbody>
</table>
</code>`
