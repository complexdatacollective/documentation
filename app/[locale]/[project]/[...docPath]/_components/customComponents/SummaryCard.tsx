import { Card, CardContent } from '@/components/ui/card';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Clock } from 'lucide-react';

type SummaryCardProps = {
  data: {
    summary: string | null;
    prerequisites: string | null;
    completion_time: string | null;
  };
};

const SummaryCard = ({ data }: SummaryCardProps) => {
  if (!data.summary || !data.completion_time || !data.prerequisites)
    return null;

  return (
    <Card className="bg-slate-200 text-black dark:bg-slate-600 dark:text-white">
      <CardContent className="p-4">
        <div className="text-sm">
          <span className="font-bold">SUMMARY:</span>
          <MDXRemote source={data.summary} />
        </div>
        <div className="text-sm">
          <span className="font-bold">PREREQUISITES:</span>
          <MDXRemote source={data.prerequisites} />
        </div>
        <div className="text-sm">
          <span className="block font-bold">DURATION:</span>
          <div className="flex gap-1">
            <Clock size={'20px'} />
            {data.completion_time}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
