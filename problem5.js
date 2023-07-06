// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

const num1 = 2;
const num2 = 3;
if (num1 < num2 && num1 > num2) {
  console.log("it is a number");
} else {
  console.log("it is not a number");
}

if (num1 < num2 || num1 > num2) {
  console.log("it is a number");
} else {
  console.log("it is not a number");
}
