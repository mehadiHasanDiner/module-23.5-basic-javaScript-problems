// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

function paperRequirements(book1, book2, book3) {
  const pageOfBook1 = 100;
  const pageOfBook2 = 200;
  const pageOfBook3 = 300;

  const book1TotalPage = pageOfBook1 * book1;
  const book2TotalPage = pageOfBook2 * book2;
  const book3TotalPage = pageOfBook3 * book3;

  const totalPageForAllBooks = book1TotalPage + book2TotalPage + book3TotalPage;

  return totalPageForAllBooks;
}

const book1Quantity = 2;
const book2Quantity = 2;
const book3Quantity = 2;

const totalPageNeeded = paperRequirements(
  book1Quantity,
  book2Quantity,
  book3Quantity
);
console.log("Total Page Needed for all Books: ", totalPageNeeded);
