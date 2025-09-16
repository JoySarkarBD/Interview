"use client";

import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import { useEffect, useState } from "react";

const rooms = [
  {
    key: "classrooms",
    title: "Classrooms",
    description:
      "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [
      "/room.png",
      "/room-1.png",
      "/room-2.png",
      "/room-3.png",
      "/room-3.png",
      "/room-2.png",
      "/room-1.png",
      "/room.png",
    ],
  },
  {
    key: "library",
    title: "Library",
    description:
      "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students’ literacy development.",
    images: [
      "/library.png",
      "/library-1.png",
      "/library-2.png",
      "/library-3.png",
      "/library-2.png",
      "/library-3.png",
      "/library-1.png",
      "/library.png",
    ],
  },
  {
    key: "science-lab",
    title: "Science Lab",
    description:
      "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: ["/lab.png", "/lab-1.png", "/lab-2.png", "/lab-3.png"],
  },
  {
    key: "computer-lab",
    title: "Computer Lab",
    description:
      "Our computer lab empowers students with digital literacy skills and encourages innovation through technology.",
    images: [
      "/computer-lab.png",
      "/computer-lab-1.png",
      "/computer-lab-2.png",
      "/computer-lab-3.png",
      "/computer-lab-2.png",
      "/computer-lab-1.png",
      "/computer-lab.png",
      "/computer-lab-3.png",
    ],
  },
  {
    key: "garden",
    title: "Garden & Nature Area",
    description:
      "Our garden and nature area connect children with the environment, fostering appreciation and curiosity for the natural world.",
    images: [
      "/play-ground.png",
      "/play-ground-1.png",
      "/play-ground-2.png",
      "/play-ground-3.png",
      "/play-ground-2.png",
      "/play-ground-1.png",
      "/play-ground.png",
      "/play-ground-3.png",
    ],
  },
];

const tabs = [
  { key: "all", label: "All" },
  ...rooms.map((r) => ({ key: r.key, label: r.title })),
];

const RoomsGallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [imageIndexes, setImageIndexes] = useState(
    Object.fromEntries(rooms.map((r) => [r.key, 0])),
  );
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredRooms =
    activeTab === "all" ? rooms : rooms.filter((r) => r.key === activeTab);

  const handlePrev = (roomKey: string, total: number) => {
    const step = isLargeScreen ? 4 : 1;
    setImageIndexes((prev) => ({
      ...prev,
      [roomKey]: (prev[roomKey] - step + total) % total,
    }));
  };

  const handleNext = (roomKey: string, total: number) => {
    const step = isLargeScreen ? 4 : 1;
    setImageIndexes((prev) => ({
      ...prev,
      [roomKey]: (prev[roomKey] + step) % total,
    }));
  };

  return (
    <section className="mb-20 w-full px-2 py-10 md:mb-[150px] md:px-8 lg:mb-[200px]">
      <SectionTitle
        badgeText="Our Gallery"
        title="Our Rooms Gallery"
        description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />

      {/* Tabs */}
      <div className="container">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`font-outfit cursor-pointer rounded-md border-2 border-black px-6 py-2 font-semibold text-black transition ${
                activeTab === tab.key
                  ? "bg-[#e2e0df]"
                  : "bg-transparent hover:bg-gray-800 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container mt-[200px] space-y-[200px]">
        {filteredRooms.map((room) => {
          const currentIndex = imageIndexes[room.key];
          const total = room.images.length;

          // For large screens show 4 images, otherwise show only 1
          const visibleImages = isLargeScreen
            ? room.images
                .slice(currentIndex, currentIndex + 4)
                .concat(
                  currentIndex + 4 > total
                    ? room.images.slice(0, (currentIndex + 4) % total)
                    : [],
                )
            : [room.images[currentIndex]];

          return (
            <div
              key={room.key}
              className="relative flex items-end justify-center rounded-lg border-2 border-black bg-white p-12 shadow-[6px_6px_0px_black] lg:h-[370px]"
            >
              {/* Images */}
              <div className="absolute top-0 left-1/2 grid w-full -translate-x-1/2 -translate-y-1/2 transform grid-cols-1 gap-6 p-10 lg:grid-cols-4">
                {visibleImages.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={room.title}
                    width={344}
                    height={304}
                    className="mx-auto w-[300px] rounded-lg shadow-lg lg:w-full"
                  />
                ))}
              </div>

              {/* Text + Arrows */}
              <div className="mt-24 flex w-full flex-col lg:mt-0">
                <div className="flex flex-col-reverse items-center justify-between gap-3 lg:flex-row">
                  <h2 className="font-raleway text-center text-[28px] font-bold md:text-[34px] lg:text-left lg:text-[40px]">
                    {room.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handlePrev(room.key, room.images.length)}
                      className="flex cursor-pointer items-center rounded-lg border border-black bg-transparent px-4 py-2 text-black hover:bg-[#e2e0df]"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.5 15C22.5 15.6213 21.9963 16.125 21.375 16.125H11.4181L14.6547 19.0641C15.1026 19.4947 15.1166 20.2069 14.6859 20.6547C14.2553 21.1026 13.5431 21.1166 13.0953 20.6859L7.84525 15.8109C7.62466 15.5988 7.5 15.306 7.5 15C7.5 14.694 7.62466 14.4012 7.84525 14.1891L13.0953 9.31406C13.5431 8.88342 14.2553 8.89739 14.6859 9.34525C15.1166 9.79312 15.1026 10.5053 14.6547 10.9359L11.4181 13.875L21.375 13.875C21.9963 13.875 22.5 14.3787 22.5 15Z"
                          fill="#333333"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleNext(room.key, room.images.length)}
                      className="flex cursor-pointer items-center rounded-lg border border-black bg-transparent px-4 py-2 text-black hover:bg-[#e2e0df]"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5 15C7.5 14.3787 8.00368 13.875 8.625 13.875H18.5819L15.3453 10.9359C14.8974 10.5053 14.8834 9.79312 15.3141 9.34525C15.7447 8.89739 16.4569 8.88342 16.9047 9.31406L22.1547 14.1891C22.3753 14.4012 22.5 14.694 22.5 15C22.5 15.306 22.3753 15.5988 22.1547 15.8109L16.9047 20.6859C16.4569 21.1166 15.7447 21.1026 15.3141 20.6547C14.8834 20.2069 14.8974 19.4947 15.3453 19.0641L18.5819 16.125H8.625C8.00368 16.125 7.5 15.6213 7.5 15Z"
                          fill="#333333"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="font-outfit mt-6 text-center font-medium md:text-xl lg:text-left lg:text-[22px]">
                  {room.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomsGallery;
