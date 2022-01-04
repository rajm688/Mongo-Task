Microsoft Windows [Version 10.0.19044.1415]
(c) Microsoft Corporation. All rights reserved.

C:\Users\WAR-MACHINE>mongo
MongoDB shell version v5.0.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("cbbf4db8-4aa0-4556-954a-70407547d9b9") }
MongoDB server version: 5.0.5
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting:
        2022-01-03T13:48:55.051+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> db
test
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> show databases
admin   0.000GB
config  0.000GB
local   0.000GB
> use FirstDB
switched to db FirstDB
> show collections
> db.movies.insertMany([
...   {
...     name: "RRR",
...     poster:
...       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
...     rating: 8.8,
...     summary:
...       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
...   },
...   {
...     name: "Iron man 2",
...     poster:
...       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
...     rating: 7,
...     summary:
...       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
...   },
...   {
...     name: "No Country for Old Men",
...     poster:
...       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
...     rating: 8.1,
...     summary:
...       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
...   },
...   {
...     name: "Jai Bhim",
...     poster:
...       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
...     summary:
...       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
...     rating: 8.8
...   },
...   {
...     name: "The Avengers",
...     rating: 8,
...     summary:
...       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
...     poster:
...       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
...   },
...   {
...     name: "Interstellar",
...     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
...     rating: 8.6,
...     summary:
...       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
...   },
...   {
...     name: "Baahubali",
...     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
...     rating: 8,
...     summary:
...       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
...   },
...   {
...     name: "Ratatouille",
...     poster:
...       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
...     rating: 8,
...     summary:
...       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
...   }
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("61d44a7b1e7ab1c510649460"),
                ObjectId("61d44a7b1e7ab1c510649461"),
                ObjectId("61d44a7b1e7ab1c510649462"),
                ObjectId("61d44a7b1e7ab1c510649463"),
                ObjectId("61d44a7b1e7ab1c510649464"),
                ObjectId("61d44a7b1e7ab1c510649465"),
                ObjectId("61d44a7b1e7ab1c510649466"),
                ObjectId("61d44a7b1e7ab1c510649467")
        ]
}
> show documents
uncaught exception: Error: don't know how to show [documents] :
shellHelper.show@src/mongo/shell/utils.js:1211:11
shellHelper@src/mongo/shell/utils.js:838:15
@(shellhelp2):1:1
> show collectios
uncaught exception: Error: don't know how to show [collectios] :
shellHelper.show@src/mongo/shell/utils.js:1211:11
shellHelper@src/mongo/shell/utils.js:838:15
@(shellhelp2):1:1
> show collections
movies
> db.movies.find({rating:7})
{ "_id" : ObjectId("61d44a7b1e7ab1c510649461"), "name" : "Iron man 2", "poster" : "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg", "rating" : 7, "summary" : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy." }
> db.movies.find({}).pretty()
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649460"),
        "name" : "RRR",
        "poster" : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        "rating" : 8.8,
        "summary" : "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649461"),
        "name" : "Iron man 2",
        "poster" : "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        "rating" : 7,
        "summary" : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649462"),
        "name" : "No Country for Old Men",
        "poster" : "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        "rating" : 8.1,
        "summary" : "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649463"),
        "name" : "Jai Bhim",
        "poster" : "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        "summary" : "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        "rating" : 8.8
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649464"),
        "name" : "The Avengers",
        "rating" : 8,
        "summary" : "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        "poster" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649465"),
        "name" : "Interstellar",
        "poster" : "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        "rating" : 8.6,
        "summary" : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649466"),
        "name" : "Baahubali",
        "poster" : "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        "rating" : 8,
        "summary" : "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649467"),
        "name" : "Ratatouille",
        "poster" : "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        "rating" : 8,
        "summary" : "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
}
> db.movies.find({}).pretty()
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649460"),
        "name" : "RRR",
        "poster" : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        "rating" : 8.8,
        "summary" : "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649461"),
        "name" : "Iron man 2",
        "poster" : "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        "rating" : 7,
        "summary" : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649462"),
        "name" : "No Country for Old Men",
        "poster" : "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        "rating" : 8.1,
        "summary" : "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649463"),
        "name" : "Jai Bhim",
        "poster" : "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        "summary" : "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        "rating" : 8.8
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649464"),
        "name" : "The Avengers",
        "rating" : 8,
        "summary" : "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        "poster" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649465"),
        "name" : "Interstellar",
        "poster" : "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        "rating" : 8.6,
        "summary" : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649466"),
        "name" : "Baahubali",
        "poster" : "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        "rating" : 8,
        "summary" : "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649467"),
        "name" : "Ratatouille",
        "poster" : "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        "rating" : 8,
        "summary" : "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
}
> db.movies.deleteMany({rating:{$gt: 8.6}})
{ "acknowledged" : true, "deletedCount" : 2 }
> db.movies.updateOne({"name" : "Jai Bhim"},{$set:{"rating":9}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
> db.movies.find({}).pretty()
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649461"),
        "name" : "Iron man 2",
        "poster" : "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        "rating" : 7,
        "summary" : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649462"),
        "name" : "No Country for Old Men",
        "poster" : "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        "rating" : 8.1,
        "summary" : "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649464"),
        "name" : "The Avengers",
        "rating" : 8,
        "summary" : "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        "poster" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649465"),
        "name" : "Interstellar",
        "poster" : "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        "rating" : 8.6,
        "summary" : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649466"),
        "name" : "Baahubali",
        "poster" : "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        "rating" : 8,
        "summary" : "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649467"),
        "name" : "Ratatouille",
        "poster" : "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        "rating" : 8,
        "summary" : "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
}
> db.movies.updateOne({"name" : "Ratatouille"},{$set:{"rating":9}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({}).pretty()
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649461"),
        "name" : "Iron man 2",
        "poster" : "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        "rating" : 7,
        "summary" : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649462"),
        "name" : "No Country for Old Men",
        "poster" : "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        "rating" : 8.1,
        "summary" : "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649464"),
        "name" : "The Avengers",
        "rating" : 8,
        "summary" : "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        "poster" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649465"),
        "name" : "Interstellar",
        "poster" : "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        "rating" : 8.6,
        "summary" : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649466"),
        "name" : "Baahubali",
        "poster" : "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        "rating" : 8,
        "summary" : "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
}
{
        "_id" : ObjectId("61d44a7b1e7ab1c510649467"),
        "name" : "Ratatouille",
        "poster" : "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        "rating" : 9,
        "summary" : "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
}
> exit
bye

C:\Users\WAR-MACHINE>dir > mongo.js

C:\Users\WAR-MACHINE>cd Desktop

C:\Users\WAR-MACHINE\Desktop>dir > mongo.js

C:\Users\WAR-MACHINE\Desktop>