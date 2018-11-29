# robot-twitter-talker

Hi! This is a chatbot integrated with twitter and a sentiment analysis. The project is build on a microservices architecture distributed in 3 bases. 
- The first one is the 'Chato' wich is the bot, created with the rivescript API (https://www.rivescript.com/about) so we can say that the 'Chato' is the brain of our aplication.
- The other one is the 'Sentimenter' wich is our sentiment analyst, so it may be... the heart?
- The last one is the 'Writer' that is the integration that we have to the twitter API. So it is our tongue or arms? idk u decide. 

As mentioned before this is a microservices application that runs in 3 separated REST services, as everything in life there are earnings and losses as we can see below:

**Benefits**
- Enables the continuous delivery and deployment of large, complex applications.
- Better testability - services are smaller and faster to test
- Better deployability - services can be deployed independently
- It enables you to organize the development effort around multiple, auto teams. It enables you to organize the development effort around multiple teams. Each (two pizza) team is owns and is responsible for one or more single service. Each team can develop, deploy and scale their services independently of all of the other teams.
- Each microservice is relatively small
- Easier for a developer to understand
- The IDE is faster making developers more productive
- The application starts faster, which makes developers more productive, and speeds up deployments
- Improved fault isolation. For example, if there is a memory leak in one service then only that service will be affected. The other services will continue to handle requests. In comparison, one misbehaving component of a monolithic architecture can bring down the entire system.
- Eliminates any long-term commitment to a technology stack. When developing a new service you can pick a new technology stack. Similarly, when making major changes to an existing service you can rewrite it using a new technology stack.

**Drawbacks**
- Developers must deal with the additional complexity of creating a distributed system.
- Developer tools/IDEs are oriented on building monolithic applications and don’t provide explicit support for developing distributed applications.
-Testing is more difficult
-Developers must implement the inter-service communication mechanism.
-Implementing use cases that span multiple services without using distributed transactions is difficult
-Implementing use cases that span multiple services requires careful coordination between the teams
-Deployment complexity. In production, there is also the operational complexity of deploying and managing a system comprised of many different service types.
-Increased memory consumption. The microservice architecture replaces N monolithic application instances with NxM services instances. If each service runs in its own JVM (or equivalent), which is usually necessary to isolate the instances, then there is the overhead of M times as many JVM runtimes. Moreover, if each service runs on its own VM (e.g. EC2 instance), as is the case at Netflix, the overhead is even higher.

## the INIT(Finally)

To consume the twitter api we should first get the token and key, you can create yours following this guide (https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html). and put the information in the config.js file

_And the application runs with **Node.js** so you should have this installed._

Run: 
- npm install

Then voilà! the application is ready! easy isn't is? And now just run the following js to initialize the REST API:

- Node chato.js
- Node writer.js
- Node sentimenter.js

_run the it in different prompts _

the listener is our "main" so you sould run this too 
- _node listener.js_
but as a consequence of the microservice architecture you can buld it in any language and any plataform just consuming the same requisitions.

_This is a very embryonic project that I built (and am building) just to fun and of course for learning, but please, feel free to play with all this._

*Any further question please contact me!*

