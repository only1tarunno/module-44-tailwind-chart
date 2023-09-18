import PropTypes from "prop-types";
import { AiOutlineCheckCircle } from "react-icons/ai";

const PriceOption = ({ option }) => {
  const { name, features, price, billing_cycle, savings } = option;
  return (
    <div className="bg-blue-300 rounded-md p-4 text-center flex flex-col items-center">
      <h2 className="">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-xl">/mon</span>
      </h2>
      <h4 className="text-3xl my-4">{name}</h4>
      <ul className="text-start flex-grow">
        {features.map((feature, idx) => (
          <li className="flex items-center my-2" key={idx}>
            <AiOutlineCheckCircle className="me-2"></AiOutlineCheckCircle>
            {feature}
          </li>
        ))}
      </ul>

      <button className="btn mt-12 w-full ">Buy Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};
export default PriceOption;
