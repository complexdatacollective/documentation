import Link from "next/link";

const ListItem = ({ post }) => {
  const { id, date, title } = post;

  return (
    <li>
      <Link className="underline text-lg text-blue-400" href={`#`}>
        {title}
      </Link>
      <br />
      <p className="text-sm text-red-200">{date}</p>
    </li>
  );
};

export default ListItem;
