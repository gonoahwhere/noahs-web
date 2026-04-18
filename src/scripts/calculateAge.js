export function calculateAge(birthDate) {
  const birthday = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const hasHadBirthdayThisYear = today.getMonth() > birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
}
