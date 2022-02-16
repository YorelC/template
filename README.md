# Start a new porject

## Install make and docker
To build container, make and docker are required

</br> 

## Build containers

</br> 

### __Setup database of your project__

Run the command line 
```
make up_bdd
```

You must :

- go into mongo container console and connect as user admin
```
mongo -u admin
```

Password is by default write into docker-compose mongo's file.


- Create the user of database :

```
db.createUser({user: "myproject", pwd: "1234", roles: [ { role: "readWrite", db: "myproject" } ]})
```

(the `init-mongo.js` file is not used, maybe because of access rule, so project's user is not automatically set by the file. Must pass by the command line into container)


- Down mongo container
```
make down_bdd
```

NOTE : If you have other instance of mongo container, change network `172.27.0.1` into `172.28.0.1` by example.

</br> 

### __Build others containers__
To build web app and web service
```
make build-containers-app
```
</br> 

## Start App
</br> 

### __Production mode__
</br> 

To run app into production mode
```
make up_app
```
</br> 

### __Debug mode for front__
</br> 

If you want to debug front :

```
make up_debug_front_bundle
```

and into the container, write the command line

```
npm run dev
```

In other terminal, start mongo and web service container
```
make up_bdd ; make up_ws
```
</br> 

## Stop App
</br> 

To stop app into production mode
```
make down_app
```
