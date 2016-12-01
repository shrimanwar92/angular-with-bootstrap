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
    <nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" (click)="p.previous()" aria-label="First">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

    <li class="page-item">
      <a class="page-link" (click)="p.previous()" aria-label="Previous">
        <span aria-hidden="true"> < </span>
      </a>
    </li>

    <div class="dropdown1">
    <select #select2 class="pageSizeSelect">
      <option *ngFor="let psize of pageSize" [value]="psize">{{psize}}</option>
    </select>
    </div>

    <li class="page-item">
      <a class="page-link" (click)="p.next()" aria-label="Next">
        <span aria-hidden="true"> > </span>
      </a>
    </li>

    <li class="page-item">
      <a class="page-link" (click)="p.next()" aria-label="Last">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    `;

export const DEFAULT_STYLES = `
  .pagination {
    width: 100% !important;
  }

  .pageSizeSelect {
    width: 22%;
  }
`;

export const PAGE_SIZE = ['15', '25', '50', '100'];
 