import SpecialistCard from "./SpecialistCard";
import doctorOne from "@/assets/images/doctorOne.png";
import doctorTwo from "@/assets/images/doctorTwo.png";
import doctorThree from "@/assets/images/doctorThree.png";

const SpecialistsNearYou = () => {
  const specialists = [
    {
      name: "Dr. Josh Tobi",
      specialty: "Nephrologist",
      image: doctorOne,
      rating: 5,
    },
    {
      name: "Dr. Aisha Alo",
      specialty: "Physio Therapist",
      image: doctorTwo,
      rating: 5,
    },
    {
      name: "Dr. Goke Olatunde",
      specialty: "Gynecologist",
      image: doctorThree,
      rating: 5,
    },
  ];

  return (
    <div className="bg-white rounded-xl sm:p-6 p-4 shadow-sm">
      <h2 className="xl:text-[20px] md:text-[19px] text-[18px]  font-semibold text-gray-800 mb-4">Specialists near you</h2>

      <div className="space-y-4">
        {specialists.map((specialist, index) => (
          <SpecialistCard key={index} {...specialist} />
        ))}
      </div>
    </div>
  );
};

export default SpecialistsNearYou;
