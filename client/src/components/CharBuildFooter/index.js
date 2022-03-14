import React from 'react';
import { Link } from 'react-router-dom';

const CharBuildFooter = () => {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <Link href="/" class="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      </Link>
      <span class="name">© D&D Beyond</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><Link class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></Link></li>
      <li class="ms-3"><Link class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></Link></li>
      <li class="ms-3"><Link class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></Link></li>
    </ul>
  </footer>
  );
};

export default CharBuildFooter;