interface Props {
  description: string;
}

export default function ClassOverview({ description }: Props) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Giới thiệu</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
