import { PicturesProp, pictures } from "./pictures";

function Gallery() {
  return (
    <div className="grid py-4 sm:py-6 lg:grid-cols-4 lg:grid-rows-[repeat(6,_148px)] lg:gap-x-6 lg:gap-y-6">
      {pictures.map(({ image, colSpan, rowSpan, alt }: PicturesProp) => {
        const className = `bg-dark ${colSpan} ${rowSpan}`;
        return <div className={className}></div>;
      })}
    </div>
  );
}

export default Gallery;
