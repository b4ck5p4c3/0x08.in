FROM ruby:alpine
RUN apk --update add ruby-dev build-base \
    && gem install github-pages \
    && apk del build-base

WORKDIR /jekyll
EXPOSE 4000
CMD jekyll serve --watch --force_polling -H 0.0.0.0 -P 4000
