import Star from "@/shared/icons/Star";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    const fillAmount = Math.max(0, Math.min(1, rating - (i - 1)));
    const fillPercentage = Math.round(fillAmount * 100);

    stars.push(
      <div key={i} className="relative">
        <Star className="absolute" />
        {fillAmount > 0 && (
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${fillPercentage}%` }}
          >
            <Star fill="#FF6633" />
          </div>
        )}
      </div>
    );
  }

  return <div className="flex flex-row gap-1">{stars}</div>;
};

export default StarRating;
