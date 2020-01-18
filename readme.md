# WSUCon
[![Codeship Status for WSU-LUG/wsucon](https://app.codeship.com/projects/15c60710-e52d-0132-b884-266c7b4e6c8b/status?branch=master)](https://app.codeship.com/projects/81971)
[![Code Climate](https://codeclimate.com/github/WSU-LUG/wsucon/badges/gpa.svg)](https://codeclimate.com/github/WSU-LUG/wsucon)
[![Issue Count](https://codeclimate.com/github/WSU-LUG/wsucon/badges/issue_count.svg)](https://codeclimate.com/github/WSU-LUG/wsucon)

Repository for the [WSUCon Website](http://wsucon.wsu.edu/).
* [Bootstrap Base](https://github.com/BlackrockDigital/startbootstrap-modern-business)
	- based on the MIT License
* [Unstyled Bootstrap](https://startbootstrap.com/template-categories/unstyled/)

## Breakdown of structure
```
/ # The repository. Congrats, you found it.
|-- static # club files to edit (ie: not core bootstrap)
|   |-- resources # Configuration files, something that has code or markup in it
|   |-- assets # Images, video, other things that aren't code, markup, or configuration


```

# This will all be changed. Hold on to your hats.

## Major TODOs

- refine & update logo
- menu bars available with scrolling
- quick to top scrolling button


## Minor TODOs

- Update logo with new design for 2020 (45 mins)
- Update 404.html 
- Remove brackets.md
- Create new eventbrite event (20 minutes)
- confirm contact information for contact.md with bobby
- update Dockerfile to reflect WSUCon site
- Add 404.html to nginx config
- Update and template FAQs using jekyll front matter
- make sure nginx docker loads images directory with bind mount
- Update games-tournaments.html to be in Jekyll. Should include tournament schedule
- Decide on food (email bobby)
- Call about food (After email response from bobby, by Monday)
- Create Cougsync Event
- Call Neil Manning about WSUCon event setup
- Put together volunteer meeting/runthrough
- Contact RHA about getting funding for switches
- Update sponsors page with ASWSU
- Update winterwonderlan.html with default template
- Update wsucraft.html with default template 

# Future Plans

Dependencies for future builds include looking into:

### Overal platforms & shiz

1. Code: https://github.com/WSU-LUG/
2. Build: http://gulpjs.com/
3. Templating: http://handlebarsjs.com/
4. Deploy: https://codeship.com/
5. Host: http://wsucon.wsu.edu/
6. Pretty: http://fortawesome.github.io/Font-Awesome/

### Dev dependencies

1. git
2. nodejs
3. npm
4. bower
5. bootstrap / angular
6. sass
7. font-awesome

### Something like
A modification/combination of [handlebars](https://www.npmjs.com/package/gulp-handlebars) and [this](http://ericlbarnes.com/setting-gulp-bower-bootstrap-sass-fontawesome/) killer setup.
