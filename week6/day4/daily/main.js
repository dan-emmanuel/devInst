let groceries = {
  fruits : ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice : "20$",
  other : {
      payed : true,
      meansOfPayment : ["cash", "creditCard"]
  }
}



// Copy this object using the method that was taught in today’s lesson.
groceriesBis = JSON.parse(JSON.stringify(groceries))

// Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
groceries.totalPrice = "35$"
// Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?
groceries.other.payed = false


// in that case copy won't be affected because the firs object was stringify and serialize