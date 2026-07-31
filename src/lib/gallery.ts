export type GalleryMedia =
  | {
      type: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      width: number;
      height: number;
      alt: string;
    };

export const galleryMedia: GalleryMedia[] = [
  {
    type: "image",
    src: "/images/gallery/classroom-1.jpg",
    width: 960,
    height: 1280,
    alt: "Tanuja Singh teaching in the classroom",
  },
  {
    type: "video",
    src: "/videos/gallery/teachers-day.mp4",
    poster: "/images/gallery/teachers-day-poster.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh speaking at the Teacher's Day celebration",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-2.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh at her desk between classes",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-4.jpg",
    width: 786,
    height: 1280,
    alt: "Tanuja Singh at the Teacher's Day celebration",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-3.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh at the lectern during a lesson",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-5.jpg",
    width: 1280,
    height: 960,
    alt: "Tanuja Singh celebrating a student's birthday with the class",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-6.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh sharing cake with a student",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-7.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh being fed cake by a student",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-8.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh giving a gift to a student",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-9.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh with students at a class celebration",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-10.jpg",
    width: 1280,
    height: 720,
    alt: "Tanuja Singh posing with a group of students",
  },
  {
    type: "image",
    src: "/images/gallery/classroom-11.jpg",
    width: 960,
    height: 1280,
    alt: "Tanuja Singh seated at a classroom desk in front of the blackboard",
  },
];
