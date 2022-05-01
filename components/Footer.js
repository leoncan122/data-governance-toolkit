export default function Footer() {
  return (
    <>
      <footer className="flex flex-col h-96 items-center justify-around md:flex-row bg-main-color">
        <div className="h-28 sm:w-2/6">Imagen</div>
        <div className="w-full h-3/5 text-center sm:text-left sm:w-8/12 sm:pr-24 flex flex-col justify-around">
          <h2>
            Learn about the key Data Governance components trough our free
            course
          </h2>
          <p>
            You`ll have access to videos, notes and templates <br />
            created by the Platformable team
          </p>
          <form className="flex">
            <input className="w-7/12 h-12 rounded-l-xl"></input>
            <button
              type="submit"
              className="w-5/12 h-12 bg-yellow-500 rounded-r-xl tracking-wide font-semibold"
            >
              Subscribe to stay updated
            </button>
          </form>
        </div>
      </footer>
    </>
  );
}
