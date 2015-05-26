# yago_exp

Yago is a browser interface for control of the Parrot AR Drone. It is a full javascript app built using Express,
Node.js, and sockets.io. It was built by Dan Klos, Dillon Downey, Grace Yasukawa, Irene Ma, and Rafael Auriemo 
as our final project while attending Dev Bootcamp.

In order to run the app clone the master branch into a local repository then while within the folder in the terminal
run:

- npm install

Then connect to the drones wifi signal and run:

- node app.js

On your browser navigate to http://localhost:3000 to reach the drone interface.

Controlls for the drone are as follows:

T - Takeoff
L - Land
W - Move Forward
S - Move Backward
A - Move Left
D - Move Right
Up Arrow - Move Up
Down Arrow - Move Down
Right Arrow - Turn Right
Left Arrow - Turn Left
F - Flip Forward
G - Flip Backward
V - Flip Left
B - Flip Right
R - Toggle Record

By default all videos recorded during flight will be saved within the /videos folder located inside the root directory.

We owe a lot of our progress to Laurent Eschenauer (https://github.com/eschnou) who has written several applications 
for the AR Drone as well as Benjamin Nortier who wrote some of the plugins we used.

Enjoy!
