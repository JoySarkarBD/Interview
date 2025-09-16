import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";

const subjects = [
  {
    img: "/card-image.png",
    title: "Language Arts",
    desc: "Reading, writing, storytelling, and communication skills.",
  },
  {
    img: "/card-image.png",
    title: "Mathematics",
    desc: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    img: "/card-image.png",
    title: "Science",
    desc: "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    img: "/card-image.png",
    title: "Social Studies",
    desc: "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    img: "/card-image.png",
    title: "Arts and Crafts",
    desc: "Encouraging creativity through various art forms and crafts.",
  },
  {
    img: "/card-image.png",
    title: "Physical Education",
    desc: "Promoting physical fitness, coordination, and teamwork.",
  },
];

export default function WhatStudentsLearn() {
  return (
    <section className="w-full px-2 py-10 md:px-8">
      <SectionTitle
        badgeText="Our Features"
        title="What Students Learn"
        description=" At Little Learners Academy, we strive to cultivate a love for learning
          and equip children with essential skills for their future success. Our
          academic programs cover a wide range of subjects, allowing students to
          develop a strong foundation and discover their interests. Some key
          areas of learning include:"
      />
      <div className="container mx-auto mt-20 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <div
            key={subject.title}
            className="relative flex min-h-[260px] flex-col items-center rounded-xl border-2 border-black bg-white p-12 shadow-[6px_6px_0px_black]"
          >
            <div className="absolute top-0 left-1/2 h-[384px] w-[125px] -translate-x-1/2 rounded-b-xl border border-t-0 border-black bg-[#FFEFE5]"></div>

            <div className="relative mb-4 h-[300px] w-full">
              <Image
                src={subject.img}
                alt={subject.title}
                fill
                className="rounded-lg border border-[#262626] object-cover"
              />
            </div>
            <h3 className="font-raleway mt-12 mb-2 text-[28px] font-semibold text-[#1A1A1A]">
              {subject.title}
            </h3>
            <p className="font-outfit text-center text-base font-medium text-[#4C4C4D]">
              {subject.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
