import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Witaj na mojej stronie</h1>
      <p>
        <Link href="/score2">Przejdź do kalkulatora SCORE2</Link>
      </p>

    </main>
  )
}