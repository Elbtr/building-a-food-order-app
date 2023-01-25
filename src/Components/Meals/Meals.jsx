import React, { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMaels from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMaels />
    </Fragment>
  );
};

export default Meals;
