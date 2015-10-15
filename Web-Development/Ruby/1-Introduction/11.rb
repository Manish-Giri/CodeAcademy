=begin
Multi-Line Comments
You can write a comment that spans multiple lines by starting each line with a #, but there's an easier way. If you start with =begin and end with =end, everything between those two expressions will be a comment. Take a look at this example:

=begin
I'm a comment!
I don't need any # symbols.
=end

=begin
	
rescue Exception => e
	
end
Don't put any space between the = sign and the words begin or end. You can do that with math (2 + 5 is the same as 2+5), but in this case, Ruby will get confused. =begin and =end also need to be on lines all by themselves, just as shown above.

Instructions
Create a multi-line comment in the editor to the right. Make sure =begin and =end are on their own lines!
=end

=begin
comment 1
comment 2
=end