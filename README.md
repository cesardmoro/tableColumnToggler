# Table Column Toggler
Is a angular directive for toggle columms on a table:

Getting started:

Example:
```
<table-column-toggler-control></table-column-toggler-control> //this autogenerates a control for the table columns with bootstrap dropdown

<table class="registros" table-column-toggler-table> //this is main directive add this to your table
<thead>
  <tr> 
      <th hide><a href="javascript:" >DNI</a></th> //this will be hidden by default
      <th hide><a href="javascript:" >Genero</a></th>
      <th><a href="javascript:" >Apellido</a></th>  
      <th><a href="javascript:" >Nombre</a></th>   
      <th><a href="javascript:" >nombres</a></th> 
      <th ignore></th> //this will be ignored (not added to control) 
  </tr>
</thead>
<tbody>
<!-- | orderBy: 'nombrelista'  --> 
  <tr ng-repeat="item in items " ng-if="items" table-column-toggler-repeat> //add this to ng-repeat
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
</code>
```
