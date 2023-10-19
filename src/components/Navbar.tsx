export default function Navbar() {
    return(
        <div className="mt-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand px-4">Token Presale</a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active px-4" aria-current="page" href="#">Connect Wallet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="#">About</a>
              </li>
            </ul>
        </div>
      </nav>
      
    </div>
    )
}