export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-around md:flex-row bg-main-color">
        <div className="sm:w-2/6">Imagen</div>
        <div className="w-full text-center sm:text-left sm:w-4/6 flex flex-col">
          <h2>
            Learn about the key Data Governance components trough our free
            course
          </h2>
          <p>
            You`ll have access to videos, notes and templates created by the
            Platformable team
          </p>
          <form className="flex">
            <input className="w-7/12 h-12"></input>
            <button type="submit" className="w-5/12 h-12 bg-yellow-500">
              Subscribe to stay updated
            </button>
          </form>
        </div>
      </footer>
    </>
  );
}
