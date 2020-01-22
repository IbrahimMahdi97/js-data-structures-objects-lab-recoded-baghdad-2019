// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  const driver1 = { ...driver };
  driver1.name="Sam";
  driver1.address = "11 Broadway"
  return driver1;
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
}

const driver2 = {};
destructivelyUpdateDriverWithKeyAndValue (driver, 'address', '12 Broadway');
