// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

const myArray = [
  "kalam",
  "salam",
  "jalam",
  "paliam",
  "Sarlaman",
  "Gurlam",
  "Khailam",
];

for (let i = 0; i < myArray.length; i++) {
  let neWArray = [];
  const names = myArray[i];
  console.log(names);
}
myArray[3] = "khaiya dilam";
console.log(myArray);
myArray.push("siara dilam", "Khyia dilam");
myArray.pop();
console.log(myArray);

// neWArray[4] = "payra dilam";
