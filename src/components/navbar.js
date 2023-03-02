import MyIAvatarRid from './img/MyIAvatarRid.jpg'

function Navbar(){
    return(
        <nav class="navbar" style={{backgroundColor: 'cyan'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={MyIAvatarRid}  alt ="" width="40" height="40" className="d-inline-block align-text-top"/>
          </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
        </button>
        </div>
      </nav>
    );
}

export default Navbar;