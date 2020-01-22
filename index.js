// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
}

const driver2 = {};
destructivelyUpdateDriverWithKeyAndValue (driver, 'address', '12 Broadway');
