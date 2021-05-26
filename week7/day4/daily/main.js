// Create a class named Video. 
// The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
  constructor(title, uploader,time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time
  }
  watch(){
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`) 
  }
}

let video1  = new Video("cat","john","1:00:00");
let video2  = new Video("dog","jane","00:30:00");


let videos = [
              {title:"pig",uploader:"mary",time:"2:00:00"},
              {title:"monkey",uploader:"marc",time:"00:45:00"},
              {title:"duck",uploader:"mike",time:"00:15:00"},
              {title:"fourmiz",uploader:"nigel",time:"00:25:00"},
              {title:"hornet",uploader:"lila",time:"00:30:00"}
            ]

let [v3,v4,v5,v6,v7] = videos.map(({title,uploader,time})=> new Video(title,uploader,time))

console.log(v4,v3,v5,v6,v7)