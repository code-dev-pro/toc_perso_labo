const CircleProgress = ({progress}:{progress:number}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 48 48">
      <circle
        cx="24"
        cy="24"
        r="15.9155"
        className="rating-progress-background"
      />
      <circle
         cx="24"
         cy="24"
         r="15.9155"
        className="rating-progress js-rating-progress under-50"
        style={{ strokeDashoffset: progress? progress : 0 }}
      />
    </svg>
  );
};
export default CircleProgress;
