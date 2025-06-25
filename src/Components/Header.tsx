function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 flex flex-row space-x-2 justify-evenly items-center">
      <img src="src\assets\school-logo.png" alt="School logo" className="w-25 h-25" />
      <h1 className="text-3xl font-bold">Devanga Chettiar Higher <br />Secondary School</h1>
      <p>For Quries <br />+91 9876543210</p>
      <p>08:30AM - 05:30PM <br />Monday to Saturday</p>
    </header>
  );
}

export default Header;
