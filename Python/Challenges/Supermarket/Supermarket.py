shopping_list = ["banana", "orange", "apple"]


prices = {
    "banana":4,
    "apple":2,
    "orange":1.5,
    "pear":3
    }
    
stock = {
    
    "banana":6,
    "apple":0,
    "orange":32,
    "pear":15
    }

for key in prices:
    print key
    print "price: %s" % prices[key]
    print "stock: %s" % stock[key]

total = 0
for key in prices:
    tot = prices[key] * stock[key]
    print tot
    total += tot
print total

# Write your code below!
# def compute_bill(food):
#     total = 0
#     for item in food:
#         total += prices[item]
#     return total


#stocking out
def compute_bill(food):
    total = 0
    for item in food:
        if stock[item] > 0:
            total += prices[item]
            stock[item] -= 1
    return total