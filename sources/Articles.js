export default [
  {
    links: {
      self: "http://example.com/articles",
      next: "http://example.com/articles?page[offset]=2",
      last: "http://example.com/articles?page[offset]=10"
    },
    data: [
      {
        type: "articles",
        id: "1",
        attributes: {
          title: "JSON:API paints my bikeshed!",
          content:
            "Pariatur veniam aute voluptate excepteur nisi aliquip sit duis duis. Esse ad nisi consequat enim non velit duis ea commodo laboris eu deserunt incididunt esse. Exercitation et labore consequat occaecat commodo culpa proident voluptate. Ut ullamco duis sunt in. Sint duis irure elit deserunt Lorem pariatur in aliquip anim. Pariatur ex quis deserunt incididunt dolor dolor.",
          featuredImage: "http://lorempixel.com/640/360"
        },
        relationships: {
          author: {
            links: {
              self: "http://example.com/articles/1/relationships/author",
              related: "http://example.com/articles/1/author"
            },
            data: { type: "people", id: "9" }
          },
          comments: {
            links: {
              self: "http://example.com/articles/1/relationships/comments",
              related: "http://example.com/articles/1/comments"
            },
            data: [
              { type: "comments", id: "5" },
              { type: "comments", id: "12" }
            ]
          }
        },
        links: {
          self: "http://example.com/articles/1"
        }
      }
    ],
    included: [
      {
        type: "people",
        id: "9",
        attributes: {
          firstName: "Dan",
          lastName: "Gebhardt",
          twitter: "dgeb"
        },
        links: {
          self: "http://example.com/people/9"
        }
      },
      {
        type: "comments",
        id: "5",
        attributes: {
          body: "First!"
        },
        relationships: {
          author: {
            data: { type: "people", id: "2" }
          }
        },
        links: {
          self: "http://example.com/comments/5"
        }
      },
      {
        type: "comments",
        id: "12",
        attributes: {
          body: "I like XML better"
        },
        relationships: {
          author: {
            data: { type: "people", id: "9" }
          }
        },
        links: {
          self: "http://example.com/comments/12"
        }
      }
    ]
  },
  {
    links: {
      self: "http://example.com/articles",
      next: "http://example.com/articles?page[offset]=2",
      last: "http://example.com/articles?page[offset]=10"
    },
    data: [
      {
        type: "articles",
        id: "2",
        attributes: {
          title: "JSON:API paints my bikeshed!",
          content:
            "Pariatur veniam aute voluptate excepteur nisi aliquip sit duis duis. Esse ad nisi consequat enim non velit duis ea commodo laboris eu deserunt incididunt esse. Exercitation et labore consequat occaecat commodo culpa proident voluptate. Ut ullamco duis sunt in. Sint duis irure elit deserunt Lorem pariatur in aliquip anim. Pariatur ex quis deserunt incididunt dolor dolor.",
          featuredImage: "http://lorempixel.com/641/360"
        },
        relationships: {
          author: {
            links: {
              self: "http://example.com/articles/1/relationships/author",
              related: "http://example.com/articles/1/author"
            },
            data: { type: "people", id: "9" }
          },
          comments: {
            links: {
              self: "http://example.com/articles/1/relationships/comments",
              related: "http://example.com/articles/1/comments"
            },
            data: [
              { type: "comments", id: "5" },
              { type: "comments", id: "12" }
            ]
          }
        },
        links: {
          self: "http://example.com/articles/1"
        }
      }
    ],
    included: [
      {
        type: "people",
        id: "9",
        attributes: {
          firstName: "Dan",
          lastName: "Gebhardt",
          twitter: "dgeb"
        },
        links: {
          self: "http://example.com/people/9"
        }
      },
      {
        type: "comments",
        id: "5",
        attributes: {
          body: "First!"
        },
        relationships: {
          author: {
            data: { type: "people", id: "2" }
          }
        },
        links: {
          self: "http://example.com/comments/5"
        }
      },
      {
        type: "comments",
        id: "12",
        attributes: {
          body: "I like XML better"
        },
        relationships: {
          author: {
            data: { type: "people", id: "9" }
          }
        },
        links: {
          self: "http://example.com/comments/12"
        }
      }
    ]
  },
  {
    links: {
      self: "http://example.com/articles",
      next: "http://example.com/articles?page[offset]=2",
      last: "http://example.com/articles?page[offset]=10"
    },
    data: [
      {
        type: "articles",
        id: "3",
        attributes: {
          title:
            "This is the title of ou article we will fix the length to 100 characters",
          content:
            "Pariatur veniam aute voluptate excepteur nisi aliquip sit duis duis. Esse ad nisi consequat enim non velit duis ea commodo laboris eu deserunt incididunt esse. Exercitation et labore consequat occaecat commodo culpa proident voluptate. Ut ullamco duis sunt in. Sint duis irure elit deserunt Lorem pariatur in aliquip anim. Pariatur ex quis deserunt incididunt dolor dolor.",
          featuredImage: "http://lorempixel.com/642/360"
        },
        relationships: {
          author: {
            links: {
              self: "http://example.com/articles/1/relationships/author",
              related: "http://example.com/articles/1/author"
            },
            data: { type: "people", id: "9" }
          },
          comments: {
            links: {
              self: "http://example.com/articles/1/relationships/comments",
              related: "http://example.com/articles/1/comments"
            },
            data: [
              { type: "comments", id: "5" },
              { type: "comments", id: "12" }
            ]
          }
        },
        links: {
          self: "http://example.com/articles/1"
        }
      }
    ],
    included: [
      {
        type: "people",
        id: "9",
        attributes: {
          firstName: "Dan",
          lastName: "Gebhardt",
          twitter: "dgeb"
        },
        links: {
          self: "http://example.com/people/9"
        }
      },
      {
        type: "comments",
        id: "5",
        attributes: {
          body: "First!"
        },
        relationships: {
          author: {
            data: { type: "people", id: "2" }
          }
        },
        links: {
          self: "http://example.com/comments/5"
        }
      },
      {
        type: "comments",
        id: "12",
        attributes: {
          body: "I like XML better"
        },
        relationships: {
          author: {
            data: { type: "people", id: "9" }
          }
        },
        links: {
          self: "http://example.com/comments/12"
        }
      }
    ]
  },
  {
    links: {
      self: "http://example.com/articles",
      next: "http://example.com/articles?page[offset]=2",
      last: "http://example.com/articles?page[offset]=10"
    },
    data: [
      {
        type: "articles",
        id: "4",
        attributes: {
          title: "JSON:API paints my bikeshed!",
          content:
            "Pariatur veniam aute voluptate excepteur nisi aliquip sit duis duis. Esse ad nisi consequat enim non velit duis ea commodo laboris eu deserunt incididunt esse. Exercitation et labore consequat occaecat commodo culpa proident voluptate. Ut ullamco duis sunt in. Sint duis irure elit deserunt Lorem pariatur in aliquip anim. Pariatur ex quis deserunt incididunt dolor dolor.",
          featuredImage: "http://lorempixel.com/643/360"
        },
        relationships: {
          author: {
            links: {
              self: "http://example.com/articles/1/relationships/author",
              related: "http://example.com/articles/1/author"
            },
            data: { type: "people", id: "9" }
          },
          comments: {
            links: {
              self: "http://example.com/articles/1/relationships/comments",
              related: "http://example.com/articles/1/comments"
            },
            data: [
              { type: "comments", id: "5" },
              { type: "comments", id: "12" }
            ]
          }
        },
        links: {
          self: "http://example.com/articles/1"
        }
      }
    ],
    included: [
      {
        type: "people",
        id: "9",
        attributes: {
          firstName: "Dan",
          lastName: "Gebhardt",
          twitter: "dgeb"
        },
        links: {
          self: "http://example.com/people/9"
        }
      },
      {
        type: "comments",
        id: "5",
        attributes: {
          body: "First!"
        },
        relationships: {
          author: {
            data: { type: "people", id: "2" }
          }
        },
        links: {
          self: "http://example.com/comments/5"
        }
      },
      {
        type: "comments",
        id: "12",
        attributes: {
          body: "I like XML better"
        },
        relationships: {
          author: {
            data: { type: "people", id: "9" }
          }
        },
        links: {
          self: "http://example.com/comments/12"
        }
      }
    ]
  }
];
