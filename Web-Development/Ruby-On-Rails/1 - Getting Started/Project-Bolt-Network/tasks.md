Bolt Network wants to create a Rails app with a Home page and an About page. Here's what it looks like.

Using the request/response cycle as a guide, there are eight changes to be made.

To preview your app at any point:

In the terminal, type rails s -p 8080 -b 0.0.0.0
In the browser, visit http://localhost:8080
Mark the tasks as complete by checking them off
1.
Create a new Rails app named bolt-network.
2.
After you create the new app, switch to its folder. In the terminal, type:

$ cd bolt-network
3.
Install the gems in the Gemfile.
4.
Generate a controller named Pages. In the Pages controller (app/controllers/pages_controller.rb) make an action named home for the Home page and about for the About page.
5.
In the routes file (config/routes.rb), first set the home action as the root route. Second, create a new route to map the url /about to the about action.
6.
Start a Rails server to preview the app in the browser. In the terminal, type:

rails s -p 8080 -b 0.0.0.0
Then visit http://localhost:8080 in the browser.
7.
In the app/views/pages/ directory, create a new view called about.html.erb. Copy the HTML from here and paste it inside app/views/pages/about.html.erb.
8.
Set up the layout file (app/views/layouts/application.html.erb):

The layout file lets you build a base view that contains all the common elements of your site, such as CSS files, the header, and the footer. The <%= yield %> defines the portion of the layout that child templates (like home.html.erb and about.html.erb) can fill in.

In the <head> element below the <title>, add the CSS files for Bootstrap and the web font:

<link rel="stylesheet" href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css"> <link href='https://fonts.googleapis.com/css?family=Oxygen:300,400,700' rel='stylesheet' type='text/css'>
Then in the browser, click the reload icon  to refresh the page and preview your updated app.
