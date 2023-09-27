import Link from "next/link";

type Props = {
  post: DocArticle;
};

const ListItem = ({ post }: Props) => {
  const { id, date, title } = post;

  return (
    <li>
      <Link className="underline text-lg text-blue-400" href={`fresco/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm text-red-200">{date}</p>
    </li>
  );
};

export default ListItem;
