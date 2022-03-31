Project is made using [React.js](https://reactjs.org/) and [Next.js](https://nextjs.org/).

Project is deployed on vercel. Here is demo: [https://prepend-pokemon-omega.vercel.app/](https://prepend-pokemon-omega.vercel.app/)

## Short Introduction

This is a Pokemons App, where you can see the list of the all pokemons. By clicking `Details` button you will be redirected on the detailed page `/detailed/[name]`, Where you can find detailed information about the pokemon

On the main page there is search bar. The search is done as if it is supported by API by providing `q` query parameter, although API does not provides a keyword filter.

One way to do a search would be to get a complete list and filter it on client side, however this would not be optimal so I decided to make it "fake". I hope Pokemons API developers will provide a keyword filter in future

Another challenge was displaying images on the list page.

In the assignment, there was mentioned that I should display the image on the list page, however the API route that gives the list of the pokemons ([https://pokeapi.co/api/v2/pokemon])(https://pokeapi.co/api/v2/pokemon) does not include the image of the pokemon. So I decided to fetch detailed info concurently using [swr](https://swr.vercel.app/) package for each visible pokemon and take image from there.
