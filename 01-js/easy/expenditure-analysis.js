/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const spentByCategory = {};

  transactions.forEach((t) => {
    if (!spentByCategory.hasOwnProperty(t.category))
      spentByCategory[t.category] = 0;

    spentByCategory[t.category] += t.price;
  })

  console.log(spentByCategory);

  const result = [];
  for (let key of Object.keys(spentByCategory)) {
    result.push({
      category: key,
      totalSpent: spentByCategory[key]
    })
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;