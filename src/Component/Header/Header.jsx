function Header({ universityName, department }) {
  return (
    <header className="header">
      <div className="university">
        <h1>{universityName}</h1>
        <p>{department}</p>
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Courses</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;