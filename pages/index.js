import Link from "next/link";

function Index() {
  return (
    <div>
      <h1>The Home page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
