export type TCarouselSlide = {
  id: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
  linkText: string;
  prevId: string;
  nextId: string;
};

export const slides: TCarouselSlide[] = [
  {
    id: "slide1",
    imgSrc: "/carousel/one.jpg",
    imgAlt: "Smiling child",
    link: "https://unsplash.com/photos/Zyx1bK9mqmA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide5",
    nextId: "slide2",
  },
  {
    id: "slide2",
    imgSrc: "/carousel/two.jpg",
    imgAlt: "Group Photo",
    link: "https://unsplash.com/@aamir_in?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide1",
    nextId: "slide3",
  },
  {
    id: "slide3",
    imgSrc: "/carousel/three.jpg",
    imgAlt: "fishing boats on shore",
    link: "https://unsplash.com/photos/0ZQ8vojHNuc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide2",
    nextId: "slide4",
  },
  {
    id: "slide4",
    imgSrc: "/carousel/four.jpg",
    imgAlt: "truck on dirt road",
    link: "https://unsplash.com/photos/5uhOqA194JQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide3",
    nextId: "slide5",
  },
  {
    id: "slide5",
    imgSrc: "/carousel/five.jpg",
    imgAlt: "health check with child",
    link: "https://unsplash.com/photos/0mRerwRVqVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide4",
    nextId: "slide1",
  },
];
