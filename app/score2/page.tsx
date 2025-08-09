"use client";
import { useState } from "react";

export default function Score2Calculator() {
  const [age, setAge] = useState(50);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [smoking, setSmoking] = useState(false);
  const [sbp, setSbp] = useState(120);
  const [cholesterol, setCholesterol] = useState(5);
  const [score, setScore] = useState<number | null>(null);

  function calculateScore() {
    let risk = 0;
    risk += age * 0.1;
    risk += sbp * 0.05;
    risk += cholesterol * 0.2;
    risk += smoking ? 5 : 0;
    risk += gender === "male" ? 2 : 1;

    const percentage = Math.min(Math.round(risk * 0.5), 100);
    setScore(percentage);
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Kalkulator score12</h1>

      <label>Wiek: {age}</label>
      <input
        type="range"
        min="40"
        max="80"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <br />

      <label>Plec:</label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value as "male" | "female")}
      >
        <option value="male">Mezczyzna</option>
        <option value="female">Kobieta</option>
      </select>
      <br />

      <label>Cisnienie skurczowe (SBP):</label>
      <input
        type="number"
        value={sbp}
        onChange={(e) => setSbp(Number(e.target.value))}
      />
      <br />
      <label>Cholesterol calkowity:</label>
      <input
        type="number"
        step="0.1"
        value={cholesterol}
        onChange={(e) => setCholesterol(Number(e.target.value))}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={smoking}
          onChange={(e) => setSmoking(e.target.checked)}
        />
        Palenie papierosow
      </label>
      <br />

      <button onClick={calculateScore}>Oblicz SCORE2</button>

      {score !== null && (
        <p>
          Twoje ryzyko sercowo-naczyniowe (SCORE2): <strong>{score}%</strong>
        </p>
      )}
    </main>
  );
}
