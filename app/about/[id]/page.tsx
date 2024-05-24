// app/aboutus/[id]/page.tsx
"use client";

import { useEffect, useState } from 'react';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

const AboutUs = ({ params }) => {
  const { id } = params;
  const [teamMember, setTeamMember] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const member = details.find((detail) => detail.id === parseInt(id));
      setTeamMember(member);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!teamMember) {
    return <p>Developer doesn't exist</p>;
  }

  return (
    <div>
      <h1>{teamMember.name}</h1>
      <p>{teamMember.role}</p>
    </div>
  );
};

export default AboutUs;
