import Link from "next/link";
import styles from "../../styles/Navigator.module.css";

export default function Navigator() {
  return (
    <header>
      <nav className="p-2 hidden sm:block  absolute w-full sm:w-10/12 bg-transparent">
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
      <nav className="w-full h-1/5 block sm:hidden p-2 bg-transparent rounded-sm absolute">
        <ul className="flex justify-between ">
          <li>Logo</li>
          <li>Options</li>
        </ul>
      </nav>
    </header>
  );
}
