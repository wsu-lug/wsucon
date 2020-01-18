FROM ruby:2.6 as buildstage
RUN apt-get update 
ENV LANG C.UTF-8
RUN apt-get -y install nodejs 
EXPOSE 4000
COPY . /website

WORKDIR website

RUN bundle install

# This next line is extremely important
ENV LANG C.UTF-8
RUN bundle exec jekyll build

FROM nginx as runstage

# Also a very important next line
ENV LANG C.UTF-8
COPY --from=buildstage /website/_site/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


