import Ionicons from "@expo/vector-icons/Ionicons";

export const ShowRating = (vote_average: number) => {
  switch (Math.floor(vote_average)) {
    case 1:
    case 2:
    case 3:
      return (
        <>
          <Ionicons name="star" size={15} color={"coral"} />
          <Ionicons name="star-outline" size={15} color={"coral"} />
          <Ionicons name="star-outline" size={15} color={"coral"} />
          <Ionicons name="star-outline" size={15} color={"coral"} />
        </>
      );
    case 4:
    case 5:
      return (
        <>
          <Ionicons name="star" size={15} color={"coral"} />
          <Ionicons name="star" size={15} color={"coral"} />
          <Ionicons name="star-outline" size={15} color={"coral"} />
          <Ionicons name="star-outline" size={15} color={"coral"} />
        </>
      );

    case 6:
    case 7:
      return (
        <>
          <Ionicons name="star" size={15} color={"coral"} />
          <Ionicons name="star" size={15} color={"coral"} />
          <Ionicons name="star" size={15} color={"coral"} />
          <Ionicons name="star-outline" size={15} color={"coral"} />
        </>
      );
    case 8:
    case 9:
    case 10:
      return (
        <>
          <Ionicons name="star" size={15} color={"coral"} />
          <Ionicons name="star" size={15} color={"coral"} />
          <Ionicons name="star" size={15} color={"coral"} />
          <Ionicons name="star" size={15} color={"coral"} />
        </>
      );
  }

  return <Ionicons name="star" size={15} color={"coral"} />;
};
