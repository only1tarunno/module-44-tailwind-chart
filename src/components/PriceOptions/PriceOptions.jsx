import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const price_options = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Cardio equipment",
        "Strength training equipment",
        "Locker room access",
      ],
      price: 30.0,
      billing_cycle: "monthly",
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym facilities",
        "Cardio equipment",
        "Strength training equipment",
        "Locker room access",
        "Group fitness classes",
        "Personal trainer consultation (1 session/month)",
      ],
      price: 50.0,
      billing_cycle: "monthly",
    },
    {
      id: 3,
      name: "Family Membership",
      features: [
        "Access to gym facilities for 2 adults and 2 children",
        "Cardio equipment",
        "Strength training equipment",
        "Locker room access",
      ],
      price: 90.0,
      billing_cycle: "monthly",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-4xl text-center mb-12">Best Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {price_options.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
