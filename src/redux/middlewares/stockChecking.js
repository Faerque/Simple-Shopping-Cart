import rootReducer from "../rootReducer";

const stockChecking = (store) => (next) => (action) => {
  const { asus, canon, dell } = [action].reduce(rootReducer, store.getState());
  if (
    asus.value < 0 ||
    canon.value < 0 ||
    dell.value < 0 ||
    asus.value > 20 ||
    canon.value > 72 ||
    dell.value > 35
  ) {
    return alert("Sorry, not purchasable");
  }
  next(action);
};

export default stockChecking;
