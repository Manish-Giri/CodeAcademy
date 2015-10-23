# Arrays of Arrays
# You might be asking yourself: "If I can put anything in an array, can I make an array of arrays?" The answer is: yes!

# Check out the array of arrays we have in the editor. Arrays of arrays are called multidimensional arrays, since the act of adding more arrays expands the array out of its string-like shape. For instance, the array in the editor is a two-dimensional array.

# Instructions
# Can you guess what this two-dimensional array will look like if we print it out? Click Save & Submit Code to see.

multi_d_array = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

multi_d_array.each { |x| puts "#{x}\n" }