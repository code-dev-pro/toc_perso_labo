import Skeleton from "./skeleton";

const Loader = () => {
  return (
    <div
      style={{
        width: "auto",
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
      }}
      className="skeleton-wrapper"
    >
      <Skeleton type="thumbnail" />
      <Skeleton type="text-md" />
      <Skeleton type="text-sm" />
      <div className="shimmer-wrapper">
        <div className="shimmer" />
      </div>
    </div>
  );
};

export default Loader;
