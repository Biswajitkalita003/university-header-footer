function Header({ universityName, department }) {
  return (
    <header>
      <h1>{universityName}</h1>
      <h3>{department}</h3>

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