type StadiumAboutProps = {
  description: string;
};

export default function StadiumAbout({ description }: StadiumAboutProps) {
  return (
    // cuadro con borde para la sección About
    <div className=" border border-gray-300 bg-gray-50 rounded-xl p-6">
      <h2 className="font-bold text-xl g mb-2">About</h2>
      <p className="text-gray-500 text-m">{description}</p>
    </div>
  );
} 