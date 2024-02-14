import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
      </div>
      <div>
        <h4 className="title">애플후레시</h4>
        <p className="sub-title">by otter dev</p>
      </div>
    </main>
  );
}
