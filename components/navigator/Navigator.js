import Link from "next/link";

export default function Navigator() {
  return (
    <>
      <nav className="p-2 hidden sm:block absolute w-full bg-transparent">
        <ul className="flex justify-between">
          <li className="p-3">Logo</li>
          <li className="p-3">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/communityOrganisations">
              <a>Community Organisations</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/dataGovernanceProcesses">
              <a>Our Data Governance processes</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-full block sm:hidden p-2 bg-transparent rounded-sm absolute">
        <ul className="flex justify-between ">
          <li>Logo</li>
          <li>Options</li>
        </ul>
      </div>
    </>
  );
}
