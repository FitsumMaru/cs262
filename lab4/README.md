Excercise 4.1

1) Soln:-

a. In a web browser, you can link to different pages using an anchor (<a>) tag. When the user clicks on a link, the URL is pushed to the browser history stack.
   When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. 
   React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story

b. React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history same way as the URL on web
   browser acts.

c. No. we can't. If we call navigation.navigate with a route name that we haven't defined in a navigator, 
   it'll print an error in development builds and nothing will happen in production builds.
   Said another way, we can only navigate to routes that have been defined on our navigator — we cannot navigate to an arbitrary component.

2)

a. The movie list uses the use state. 

b. uses route.params
