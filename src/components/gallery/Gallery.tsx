import { PicturesProp, pictures } from "./pictures";

function Gallery() {
  return (
    <div className="grid py-4 sm:py-6 grid-cols-3 auto-rows-[minmax(100px,_1fr)] md:grid-cols-3 md:grid-rows-[repeat(10,_100px)] lg:grid-cols-4 lg:grid-rows-[repeat(6,_148px)] gap-x-1 gap-y-1 md:gap-x-2 md:gap-y-2 lg:gap-x-6 lg:gap-y-6">
      {pictures.map(({ image, colSpan, rowSpan, alt }: PicturesProp) => {
        const className = `bg-dark ${colSpan} ${rowSpan}`;
        return <div className={className}></div>;
      })}
    </div>
  );
}

export default Gallery;
