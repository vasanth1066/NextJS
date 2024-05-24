// app/aboutus/page.tsx
"use client";

import Link from 'next/link';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

const AboutUsPage = () => {
  return (
    <div>
      <h1>Developers</h1>
      <ul>
        {details.map((developer) => (
          <li key={developer.id}>
          <Link href={`/about/${developer.id}`}>{developer.name}</Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUsPage;
