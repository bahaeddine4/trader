# trader

Build the app (only once)
  docker-compose up

Start the app
  docker-compose start

Access mongo shell

  docker exec -it trader_node_1 /bin/bash

  mongo -u "root" -p "password" --authenticationDatabase "admin"

Test the server 
  docker exec -it trader_mongo_1 /bin/bash
  curl localhost:3000/ping => expect pong :D
