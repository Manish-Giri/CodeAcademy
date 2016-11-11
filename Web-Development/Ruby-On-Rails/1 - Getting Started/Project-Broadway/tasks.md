Create a new Rails app named broadway.
2.
After you create the new app, switch to its folder. In the terminal, type:

$ cd broadway
The cd command is a command line command used to switch into a folder. If you are new to the command line, we recommend you do this course here.
3.
Install the gems in the Gemfile.
4.
Generate a controller named Pages.
5.
In the Pages controller (app/controllers/pages_controller.rb), make an action named home for the Home page.
6.
In the routes file (config/routes.rb), map the request for the url /pages/home to Pages controller's home action.
7.
Start a Rails server to preview the app in the browser. In the terminal, type:

rails s -p 8080 -b 0.0.0.0
This command starts a Rails server listening on port 8080. Then visit http://localhost:8080/pages/home to see your app in the browser.
8.
Finish the view to display the header and main sections:

In app/views/pages/home.html.erb in the header, add four list items for About, Work, Team and Contact.
Write CSS in app/assets/stylesheets/pages.css.scss to display them on the same line.
Change the background image of the jumbotron section. Feel free to use your own image. Here's the image we used. (Check out how to add background images.)
In the main section, add a link that says Get Started. Write CSS to style it into a dark gray button.
9.
In the routes file (config/routes.rb), set the home action as the app's home page. To do this, replace the route you created in step 6 with:

root 'pages#home'
This route tells Rails to map requests for the url / to the Pages controller's home action.
10.
Restart the Rails server and view the result by visiting http://localhost:8080/

To restart a Rails server:

In the terminal, press Ctrl+C to shut down the server.
Then type rails server -p 8080 to restart the server.
