# Teams
Angular 2 Teams list 

This is from the Tour of Heroes documentation https://angular.io/tutorial that I am using to create a teams list with two teams.

The objective here was to use the Tour of Heroes documentation tutorial and what I learned from the different sections in order to then modify the code and create two teams list (not complete). 

Unlike the Tour of Heroes which is one hero list and shows a dashboard with details and a search, here I just wanted to show two seperate teams lists with the options to add and remove team players (heroes). 

# Modifications made and where I left off (not complete): 

Dashboard component files, hero detail component files, and hero search component files were deleted.

app-routing.module.ts was modified to only show the heroes list, not the dashboard.

On the app.module.ts file, the imports for dashboard component, herodetail component, and hero search were removed. 

On the app.component.ts, the nav was removed since routes are not needed for the moment, since the only page that needs to show is the teams list. 

The hero.service.ts file needs to be modified in order to show both of the teams list which there still not showing fully. 

The in-memory-data.service.ts file was modified to create another class with the array of players (heroes) to show the second teams list but the service needs to be modified in order for these new teams to show which there not showing. 
