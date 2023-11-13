// Todo: Rename the component appropriately later

import Image from 'next/image';
import React from 'react';

type ComponentInfoProps = {
  data: {
    image: string | null;
    type: string | null;
    creates: string | null;
    uses_prompts: string | null;
  };
};

const ComponentInfo = ({ data }: ComponentInfoProps) => {
  if (!data.image || !data.creates || !data.type || !data.uses_prompts)
    return null;

  return (
    <div className="flex items-center gap-4">
      <Image
        className="object-cover"
        width={450}
        height={450}
        src={data.image}
        alt="Image"
      />
      <div className="space-y-3">
        <div>
          <span className="block text-sm font-semibold uppercase">Type:</span>
          <span className="block text-[16px] text-slate-500">{data.type}</span>
        </div>
        <div>
          <span className="block text-sm font-semibold uppercase">
            Creates:
          </span>
          <span className="block text-[16px] text-slate-500">
            {data.creates}
          </span>
        </div>
        <div>
          <span className="block text-sm font-semibold uppercase">
            Uses Prompts:
          </span>
          <span className="block text-[16px] text-slate-500">
            {data.uses_prompts === 'Yes' ? 'True' : 'False'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComponentInfo;
