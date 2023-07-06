// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

const numbersArray = [56, 86, 34, 76, 89, 99, 93, 23, 91, 87, 12, 37];

function numberSorting(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];
    if (number < 80) {
      newArray.push(number);
    }
  }
  return newArray;
}

const sortedNumbers = numberSorting(numbersArray);
console.log(sortedNumbers);
