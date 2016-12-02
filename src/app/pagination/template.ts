/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 [class.disabled]="p.isFirstPage()"
 [class.disabled]="p.isLastPage()"
 */

export const DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)">

<div id="navcontainer">
<ul id="ulNav">
<li><a (click)="p.previous()"><<</a></li>
<li><a (click)="p.previous()"><</a></li>

<li class="dropdown1">
    <select #select2 class="pageSizeSelect">
      <option *ngFor="let psize of pageSize" [value]="psize">{{psize}}</option>
    </select>
</li>

<li><a (click)="p.next()">></a></li>
<li><a (click)="p.next()">>></a></li>
</ul>
</div>
    `;

export const DEFAULT_STYLES = `
#navcontainer ul
{
margin: 0;
padding: 0;
list-style-type: none;
text-align: center;
}

#navcontainer ul li { display: inline; }

#navcontainer ul li a
{
text-decoration: none;
padding: .2em 1em;
color: #fff;
background-color: #036;
}

#navcontainer ul li a:hover
{
color: #fff;
background-color: #369;
}

#ulNav {
float: left;
width: 50%;
margin-left: -10% !important;
}
.pageSizeSelect {
  width: 20%;
  height: 35px;
}
`;

export const PAGE_SIZE = ['15', '25', '50', '100'];
 