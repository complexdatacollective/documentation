import Image from 'next/image';

type StandAloneImgProps = {
  src: string;
  content: string;
  name?: string;
};

const StandAloneImage = ({ src, content, name }: StandAloneImgProps) => {
  return (
    <div className="m-0 flex w-full flex-col items-center p-0">
      <Image
        width={450}
        height={450}
        src={src}
        alt={name ?? src}
        style={{ marginBlock: '10px' }}
      />
      <span className="text-sm italic text-slate-400">{content}</span>
    </div>
  );
};

export default StandAloneImage;

/* 
className="relative h-full w-full" 
className="h-full w-full object-cover"
*/
