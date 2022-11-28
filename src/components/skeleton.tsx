import "../css/skeleton.css";

const Skeleton = ({ type }: { type: string }) => {
  return (
    <div className="skeleton">
      <div className={type}> </div>
    </div>
  );
};

export default Skeleton;
