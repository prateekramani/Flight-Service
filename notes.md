


App.use is to include more middlewares , same we will use in router.use to include the middlewares as well
app.use will include middleware for all the api on the file

app.use also helps us in mouting the router 
ex : app.use("/url" , router_name) -> will mount the router

one another way , is what we say in express_index.js in 14_client_server
ex : app.get(url, [middlewares] , (req,res)=>{})


Generally we have ORM and ODM 
we can separate Node based ORM , Rails based ORM etc. based on the tech stack we are using.
ORM - is for SQL. Multiple are there , we will be using sequelize 
ODM - is for NO SQL

sequelize - for this we also need a driver , to tell it to which relational db it is going to connect .
            ex : mariadb , sqlite3
            After installing drivers also , we have to do lot of coding on order to setup the ORM
            in order to avoid thet we can use a library sequelize pacakage sequelize-cli
            https://github.com/sequelize/cli (check the commands in usage seciton)

Our implementation is inside src folder 
so there is a command sequelize init , which does some init stuff
so we will run "npx sequelize init" inside src folder (npm is package manager , npx is package executer)
To which it says : 
Created "config/config.json"
Successfully created models folder at "/Users/prateekramani/javascript/16_Base_NODE_JS_Template/src/models".
Successfully created migrations folder at "/Users/prateekramani/javascript/16_Base_NODE_JS_Template/src/migrations".
Successfully created seeders folder at "/Users/prateekramani/javascript/16_Base_NODE_JS_Template/src/seeders".
             
config.json - gives us 3 databases env :  developement , test , production env 
            it picks up the host , on which database is hosted 
            password - we need to mention it , if it is there , same for username
            until and unless we are working on default port , we dont need to mention it 
            dialect , it will tell us which relational database it is going to connect to - mysql

            and since this file has sensitive info , we will hide it , by putting it in gitignore 

seeders - seeders is used to inject the starting data in the db 

migrations - to do version control of our database
            for us these will be js files , in which we will write how to maintain the version in DBs
            sequelize migration:generate or  sequelize migration:create