'use client';

import Image from "next/image";

const courses = [
  {
    title: "Curso de Matemática",
    link: "/student/class/player",
    image: "/images/courses/math.jpg",
  },
  {
    title: "Curso de Português",
    link: "/student/class/player",
    image: "/images/courses/portuguese.jpg",
  },
  {
    title: "Curso de Física",
    link: "/student/class/player",
    image: "/images/courses/physics.jpg",
  },
  {
    title: "Curso de História",
    link: "/student/class/player",
    image: "/images/courses/history.jpg",
  },
  {
    title: "Curso de História",
    link: "/student/class/player",
    image: "/images/courses/history.jpg",
  },
  {
    title: "Curso de História",
    link: "/student/class/player",
    image: "/images/courses/history.jpg",
  },
  {
    title: "Curso de História",
    link: "/student/class/player",
    image: "/images/courses/history.jpg",
  },
  {
    title: "Curso de História",
    link: "/student/class/player",
    image: "/images/courses/history.jpg",
  },
  {
    title: "Curso de História",
    link: "/student/class/player",
    image: "/images/courses/history.jpg",
  },
  {
    title: "Curso de História",
    link: "/student/class/player",
    image: "/images/courses/history.jpg",
  },
];

const CoursesCarousel = () => {
  return (
    <div className="mt-12">
      <h3 className="text-3xl font-bold mb-6 text-center text-[#F99F1B]">Cursos Disponíveis</h3>
      <div className="flex overflow-x-auto space-x-6 px-4 pb-4 scrollbar-hide">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative min-w-[280px] h-[180px] rounded-xl overflow-hidden shadow-lg flex-shrink-0"
          >
            <Image
              src={course.image}
              alt={course.title}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
              <h4 className="text-xl font-semibold text-white">{course.title}</h4>
              <a
                href={course.link}
                className="text-sm text-white underline mt-1"
              >
                Ver Curso
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesCarousel;
