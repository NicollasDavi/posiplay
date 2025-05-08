import CoursesCarousel from "@/components/Carousel/CoursesCarousel";
import InfoCarousel from "@/components/Carousel/InfoCarousel";
import Reminders from "@/components/Reminders/Reminders";
import HelpButton from "@/components/ui/HelpButton";


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-[#F99F1B] mb-6">Bem-vindo, [Nome]!</h1>
        <p className="text-xl mb-6">Continue de onde parou e explore novas oportunidades de aprendizado!</p>

        {/* Carrossel de Informações */}
        <InfoCarousel />

        {/* Carrossel de Cursos */}
        <CoursesCarousel />

        {/* Lembretes */}
        <Reminders />
      </div>
    </div>
  );
}
